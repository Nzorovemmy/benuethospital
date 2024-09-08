# Generated by Django 5.1.1 on 2024-09-08 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_scheduleappointment_doctor_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='scheduleappointment',
            name='doctor_name',
            field=models.CharField(max_length=100),
        ),
    ]
