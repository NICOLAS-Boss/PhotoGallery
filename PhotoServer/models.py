from django.db import models

class Photo(models.Model):
    full_screan = models.ImageField()
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
