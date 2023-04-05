from django.contrib import admin
from user.models import Customer
from user.models import ApplicationDetails
from user.models import Predictied_Application
# Register your models here.

admin.site.register(Customer)
admin.site.register(ApplicationDetails)
admin.site.register(Predictied_Application)