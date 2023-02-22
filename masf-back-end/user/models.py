from django.db import models

# Create your models here.


class Predictied_Application(models.Model):
    application_name = models.CharField(max_length=12)

class Customer(models.Model):
    name = models.CharField(max_length=20)
    industry = models.CharField(max_length=20)
