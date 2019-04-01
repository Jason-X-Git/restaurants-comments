# Generated by Django 2.1.2 on 2018-10-13 16:08

from django.db import migrations
from django.utils.text import slugify
from unidecode import unidecode

def slugify_name(apps, schema_editor):
    '''
    We can't import the Post model directly as it may be a newer
    version than this migration expects. We use the historical version.
    '''
    Restaurant = apps.get_model('basics', 'Restaurant')
    for restaurant in Restaurant.objects.all():
        restaurant.slug = slugify(unidecode(restaurant.chinese_name))
        restaurant.save()

class Migration(migrations.Migration):

    dependencies = [
        ('basics', '0007_auto_20181013_1606'),
    ]

    operations = [
        migrations.RunPython(slugify_name),
    ]