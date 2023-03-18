from django.db import models

# Create your models here.


class Predictied_Application(models.Model):
    application_name = models.CharField(max_length=12)

class Customer(models.Model):
    name = models.CharField(max_length=20)
    industry = models.CharField(max_length=20)

class AppDetails(models.Model):
    rating = models.FloatField(null=False, default=0)
    size = models.FloatField(null=False, default=0)
    ratings_count = models.IntegerField(null=False, default=0)
    languages = models.IntegerField(max_length=255, null=False, default=0)

    