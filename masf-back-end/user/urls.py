from django.urls import path, include
from .views import register
from .views import customers
from .views import appDetails

urlpatterns = [

    path('/register/', register ),
    path('/customer/', customers),
    path('/appdetails', appDetails)

]