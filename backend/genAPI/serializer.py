from rest_framework import serializers
from .models import *

class productSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = ProductInfo 
        fields = ['pk', 'name', 'price', 'left', 'description','imagelink']

class cartSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return(instance)