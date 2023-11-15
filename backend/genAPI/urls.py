from django.urls import path
from .views import *

urlpatterns = [
    path("getallitems/" ,getallitems, name = "get_all_items"),
    path("setcartitems/",setcartitems, name = "set_cart_items"),
    path("getcartitems/",getcartitems, name = "get_cart_items"),
    path("getitembyid/",getitembyid, name = "get_item_by_id"),
    path("removecartitem/",removecartitem, name = "remove_cart_item"),
    path("searchbarcode/", getcartitembybarcode, name = "get_cart_item_by_barcode"),
    
]