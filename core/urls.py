
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('make-appointment', views.make_appointment, name='make-appointment'),
    path('billing', views.billing, name='billing'),
    path('employee', views.employee, name='employee'),
    path('Login', views.Login, name='Login'),
    path('signup', views.signup, name='signup'),
    path('Logout', views.Logout, name='Logout'),
    path('medical-records', views.medical_records, name='medical-records'),
    path('patient', views.patient, name='patient'),
    path('treatment-care', views.treatment_care, name='treatment-care')
]
