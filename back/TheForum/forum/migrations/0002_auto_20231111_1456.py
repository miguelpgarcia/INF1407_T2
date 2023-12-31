# Generated by Django 3.2.20 on 2023-11-11 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentario',
            name='texto',
            field=models.CharField(help_text='Digite o comentario:', max_length=100),
        ),
        migrations.AlterField(
            model_name='publicacao',
            name='texto',
            field=models.CharField(help_text='Digite o texto da publicacao:', max_length=10000),
        ),
        migrations.AlterField(
            model_name='publicacao',
            name='titulo',
            field=models.CharField(help_text='Entre com o titulo:', max_length=100),
        ),
    ]
