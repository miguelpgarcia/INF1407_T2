# Generated by Django 3.2.20 on 2023-11-12 17:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0002_auto_20231111_1456'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comentario',
            name='data_publicacao',
        ),
    ]
