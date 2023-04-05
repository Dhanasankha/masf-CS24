from django.db import models

# Create your models here.


class Predictied_Application(models.Model):
    application_name = models.CharField(max_length=100)
    application_category = models.CharField(max_length=100)

class Customer(models.Model):
    name = models.CharField(max_length=20)
    industry = models.CharField(max_length=20)

class ApplicationDetails(models.Model):
    category = models.CharField(max_length=20, default='Buisness')
    prize = models.FloatField(null=False, default=0)
    size = models.FloatField(null=False, default=0)
    

    