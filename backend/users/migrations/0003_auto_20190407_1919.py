# Generated by Django 2.1.7 on 2019-04-07 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20190407_1914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
