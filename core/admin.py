from django.contrib import admin

from .models import scheduleAppointment,Doctor,Billing,Patient,Employee_list

# Register your models here.

admin.site.register(scheduleAppointment)
admin.site.register(Doctor)
admin.site.register(Billing)
admin.site.register(Patient)
admin.site.register(Employee_list)