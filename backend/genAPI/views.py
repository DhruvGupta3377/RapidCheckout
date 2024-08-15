from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializer import *
from .mongoDB import additemstocart,getitemsfromcart,removeitemfromcart,removeallitemsfromcart
from django.http import JsonResponse

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
    # print(cartitems["items"])
    # return Response(serializer.data)
    iteminfo = []
    for i in cartitems["items"]:
        print(i["itemid"])
        serializer = productSerializer(ProductInfo.objects.get(pk = i["itemid"]))
        iteminfo.append(serializer.data)
    return Response(iteminfo)

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

@api_view(['POST'])
def removeallcartitems (request):
    print(request.data["userid"])
    userid = int(request.data["userid"])
    removeallitemsfromcart(userid)
    print("aande")
    return Response("ok")


from .recomModel import RecommendationModel
@api_view(['GET'])
def get_homepage_items(request):
    all_items = ProductInfo.objects.all()
    product_id = all_items.first().id if all_items.exists() else None
    
    recommended_items = []
    if product_id:
        model = RecommendationModel()
        recommended_items = model.get_recommendations(product_id)
    
    items_data = list(all_items.values())
    recommended_data = recommended_items
    
    return JsonResponse({
        'items': items_data,
        'recommended_items': recommended_data
    })