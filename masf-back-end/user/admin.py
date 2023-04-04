from django.contrib import admin
from user.models import Customer
from user.models import AppDetails
from user.models import Predictied_Application
# Register your models here.

admin.site.register(Customer)
admin.site.register(AppDetails)
admin.site.register(Predictied_Application)