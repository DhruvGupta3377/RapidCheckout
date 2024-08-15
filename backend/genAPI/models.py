from django.db import models


class ProductInfo (models.Model):
    
    CAT = [
        ('Food', 'Food'),
        ('Electronics', 'Electronics'),
        ('Clothing', 'Clothing'),
        ('Books', 'Books'),
        ('Toys', 'Toys'),
        ('Furniture', 'Furniture'),
        ('Household Goods', 'Household Goods'),
        ('Sports Equipment', 'Sports Equipment'),
        ('Beauty Products', 'Beauty Products'),
        ('Automotive', 'Automotive'),
    ]
    name = models.CharField(max_length = 30)
    price = models.IntegerField(null =False)
    left = models.IntegerField(null = False)
    description = models.CharField(max_length = 200)
    imagelink = models.CharField(max_length=200)
    barcode = models.CharField(max_length = 200)
    location = models.CharField(max_length = 20)
    rating = models.IntegerField(default = 0)
    Category = models.CharField(max_length=50, default = 'Food', choices=CAT)