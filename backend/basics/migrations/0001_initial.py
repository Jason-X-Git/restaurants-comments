# Generated by Django 2.1.7 on 2019-04-10 03:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField(max_length=500)),
                ('owner', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL, to_field='username')),
            ],
            options={
                'db_table': 'comments',
                'ordering': ('-modified',),
            },
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('english_name', models.CharField(blank=True, max_length=255, null=True)),
                ('chinese_name', models.CharField(max_length=255, unique=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('web_site', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, max_length=255, null=True)),
                ('introduction', models.TextField(blank=True, max_length=255, null=True)),
                ('hours', models.CharField(blank=True, max_length=255, null=True)),
                ('longitude', models.FloatField(blank=True, null=True)),
                ('latitude', models.FloatField(blank=True, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('quadrant', models.CharField(blank=True, max_length=255, null=True)),
                ('slug', models.SlugField(editable=False, unique=True)),
            ],
            options={
                'db_table': 'restaurants',
                'ordering': ('id',),
            },
        ),
        migrations.AddField(
            model_name='comment',
            name='restaurant',
            field=models.ForeignKey(db_column='restaurant', on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='basics.Restaurant', to_field='chinese_name'),
        ),
    ]
