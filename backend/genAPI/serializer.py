from rest_framework import serializers
from .models import *

class productSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = ProductInfo 
        fields = ['pk', 'name', 'price', 'left', 'description', 'imagelink', 'barcode', 'location']

class cartSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return(instance)
    # class Meta(object):
    #     model = ProductInfo 
    #     fields = ['pk', 'name', 'price', 'left', 'description', 'imagelink', 'barcode', 'location']