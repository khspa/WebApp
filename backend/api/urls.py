# jwt_authentication/urls.py
from django.urls import path
from .views import ExampleView

urlpatterns = [
    path("info/", ExampleView.as_view())
]