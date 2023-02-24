from django.urls import path, include
from .views import register
from .views import customers

urlpatterns = [
    path('/register/', register ),
    path('/customer/', customers)

]