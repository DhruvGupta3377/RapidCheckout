from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb://localhost:27017"
client = MongoClient(uri, server_api=ServerApi('1'))
cart = {"item_id" : 123}
database = client.RapidCheckout
carts = database.carts

def additemstocart(cart):
    if carts.find_one({"user_id" : 123123}) is None:
        carts.insert_one(cart)
    else:
        # carts.update_one({"user_id" : 123123}, {"$addToSet" : {"items": cart["items"]}})
        carts.update_one({"user_id" : 123123},  {"$addToSet": {"items": cart["items"][0]}})

def getitemsfromcart(user_id):
    return (carts.find_one({"user_id" : user_id}))
    
def removeitemfromcart(item_id):
    d = carts.update_one({"user_id" : 123123}, {"$pull" : {"items" : {'itemid' : item_id}}})
    print("donme")
# print(getitemsfromcart(123123))

