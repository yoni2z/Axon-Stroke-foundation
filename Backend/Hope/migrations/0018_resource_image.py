# Generated by Django 5.1.5 on 2025-01-31 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0017_alter_resourcedetail_resource'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='resource/'),
        ),
    ]
