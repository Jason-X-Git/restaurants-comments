# Generated by Django 2.1.2 on 2018-10-13 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basics', '0006_auto_20181010_0039'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='slug',
            field=models.SlugField(null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='introduction',
            field=models.TextField(blank=True, max_length=255, null=True),
        ),
    ]
