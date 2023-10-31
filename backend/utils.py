from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Replace the placeholder with your Atlas connection string
uri = "mongodb://localhost:27017"

# Set the Stable API version when creating a new client
client = MongoClient(uri, server_api=ServerApi('1'))
                          
# Send a ping to confirm a successful connection
# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)
try:
    db = client.scrap.trash
    result = db.things.insert_many(
        [
            {"x": 1, "tags": ["dog", "cat"]},
            {"x": 2, "tags": ["cat"]},
            {"x": 2, "tags": ["mouse", "cat", "dog"]},
            {"x": 3, "tags": []},
        ]
    )
    result.inserted_ids
except Exception as e:
    print(e)