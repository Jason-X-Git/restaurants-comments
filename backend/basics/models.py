from django.db import models
from django.template.defaultfilters import slugify
from unidecode import unidecode
from .geo_tools import *
from django.contrib.auth.models import User

# Create your models here.


class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    english_name = models.CharField(max_length=255, blank=True, null=True)
    chinese_name = models.CharField(max_length=255, unique=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    web_site = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    introduction = models.TextField(max_length=255, blank=True, null=True)
    hours = models.CharField(max_length=255, blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    quadrant = models.CharField(max_length=255, blank=True, null=True)
    # slug = AutoSlugField(populate_from='chinese_name')
    slug = models.SlugField(null=False, unique=True, editable=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(unidecode(self.chinese_name))
        try:
            long, lat = get_lonlat(self.address)
            if long != self.longitude:
                self.longitude = long
            if lat != self.latitude:
                self.latitude = lat
        except:
            pass
        super(Restaurant, self).save(*args, **kwargs)

    class Meta:
        db_table = 'restaurants'
        ordering = ('id', )

    def __str__(self):
        return '{} ({})'.format(self.chinese_name, self.english_name)


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurant, related_name='comments',
                                   to_field='chinese_name', db_column='restaurant',
                                   on_delete=models.CASCADE)
    owner = models.ForeignKey(User, related_name='comments',
                              to_field='username', db_column='user',
                              on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=500)

    class Meta:
        db_table = 'comments'
        ordering = ('-modified', )

    def __str__(self):
        return '"{}" submitted by {} as {}'.format(self.title, self.owner, self.modified)



