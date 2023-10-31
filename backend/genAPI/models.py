from django.db import models


class ProductInfo (models.Model):
    name = models.CharField(max_length = 30)
    price = models.IntegerField(null =False)
    left = models.IntegerField(null = False)
    description = models.CharField(max_length = 200)
    imagelink = models.CharField(max_length=200)
