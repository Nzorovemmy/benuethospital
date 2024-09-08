from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class scheduleAppointment(models.Model):

    patient_name = models.CharField(max_length=100)
    appointment_date = models.TimeField()
    appointment_time = models.TimeField()
    doctor_name =  models.CharField(max_length=100)

    def __str__(self):
        return self.f(patient_name),'appointment with doctor', (doctor_name)

class Doctor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
class Billing(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(decimal_places=2,max_digits=100000)

    def __str__(self) -> str:
        return self.name
class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(default=1, null=True, blank=True)
    sex = models.CharField(max_length=100, default='Male')
    marital_status = models.CharField(max_length=100, default='Single')
    email = models.CharField(max_length=100, default='')
    medical_history = models.CharField(max_length=100, default='', blank=True, null=True)
    address = models.TextField(default='')
    phone = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class Employee_list(models.Model):
    first_name = models.CharField(max_length=100, default='')
    middle_name = models.CharField(max_length=100, default='')
    surname =models.CharField(max_length=100, default='')
    address = models.TextField(default='')
    sex = models.CharField(max_length=100, default='Male')
    marital_status = models.CharField(max_length=100, default='Single')
    phone = models.IntegerField(default=0, null=True, blank=True)
    disability = models.CharField(max_length=100, default='')

    def __str__(self) -> str:
        return self.first_name
