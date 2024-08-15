import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from .models import ProductInfo

class RecommendationModel:
    def __init__(self):
        self.products_df = self._load_product_data()
    def _load_product_data(self):
        products = ProductInfo.objects.all()
        data = [{
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'category': product.Category,
            'price': product.price,
            'rating': product.rating
        } for product in products]
        return pd.DataFrame(data)

    def _compute_similarity(self):
        self.products_df['combined_features'] = self.products_df.apply(
            lambda x: f"{x['category']} {x['description']} {x['name']}", axis=1
        )
        tfidf = TfidfVectorizer(stop_words='english')
        tfidf_matrix = tfidf.fit_transform(self.products_df['combined_features'])
        return cosine_similarity(tfidf_matrix, tfidf_matrix)

    def get_recommendations(self, product_id, num_recommendations=5):
        similarity_matrix = self._compute_similarity()
        product_index = self.products_df[self.products_df['id'] == product_id].index[0]
        similarity_scores = list(enumerate(similarity_matrix[product_index]))
        similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
        similar_products_indices = [i[0] for i in similarity_scores[1:num_recommendations+1]]
        return self.products_df.iloc[similar_products_indices].to_dict('records')
