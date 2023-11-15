from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializer import *
from .mongoDB import additemstocart,getitemsfromcart,removeitemfromcart


@api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def getallitems(request):
    serializer = productSerializer(ProductInfo.objects.all(), many = True)
    return Response(serializer.data)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def setcartitems(request):
    additemstocart({
        "user_id" : 123123,
        "items" : [request.data]})
    return Response("ggezzzz")

@api_view(['GET'])
def getcartitems(request):
    user_id = request.data
    cartitems = getitemsfromcart(123123)
    serializer = cartSerializer(cartitems["items"], many = True)
    return Response(serializer.data)

@api_view(['POST'])
def getitembyid(request):
    item_id = request.data['id']
    serializer = productSerializer(ProductInfo.objects.get(pk = item_id))
    return Response(serializer.data)

@api_view(['POST'])
def removecartitem (request):
    item_id = request.data['id']
    removeitemfromcart(item_id)
    return Response ({"removed"})

@api_view(['POST'])
def getcartitembybarcode (request):
    barcode = request.data['barcode']
    serializer = productSerializer(ProductInfo.objects.get(barcode = barcode))
    # print(barcode)
    # print(serializer.data)
    return Response (serializer.data)
    # return Response("hello")