# Generated by Django 3.1.14 on 2023-08-05 20:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20230805_2244'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerreview',
            name='reviewer_phone_number',
        ),
    ]
