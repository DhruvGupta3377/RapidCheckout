from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("authAPI.urls"), name = "auth_api"),
    path("api/", include("genAPI.urls"), name = "general_api"),
]
