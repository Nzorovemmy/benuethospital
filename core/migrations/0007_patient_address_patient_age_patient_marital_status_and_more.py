# Generated by Django 5.1.1 on 2024-09-08 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_employee_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='address',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='patient',
            name='age',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='marital_status',
            field=models.CharField(default='Single', max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='phone',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='sex',
            field=models.CharField(default='Male', max_length=100),
        ),
    ]
