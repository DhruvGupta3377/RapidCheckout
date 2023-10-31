from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
uri = "mongodb://localhost:27017"
client = MongoClient(uri, server_api=ServerApi('1'))
asd = 4
post = {
    "author": "Dhruv2",
    "text": "My first blog post!",
    "asdasd":f"{asd}",
    "tags": ["mongodb", "python", "pymongo"],
    }

db = client.trash
posts = db.posts
post_id = posts.insert_one(post).inserted_id

post_id