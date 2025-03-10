# Generated by Django 5.1.4 on 2024-12-31 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0004_blog_creator'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cause',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='cause_images/')),
                ('date', models.DateField(blank=True, null=True)),
                ('creator', models.CharField(default='Creator', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
