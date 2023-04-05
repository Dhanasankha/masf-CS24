from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from user.serializers import UserSerializer
from user.serializers import CustomerSerializer
from user.serializers import AppDetailsSerializer

from user.models import Customer
from user.models import AppDetails
# invoke serializer and return to client.
import pandas as pd
# from user.predicting_model import model


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({},status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def customers(request):
    data = Customer.objects.all()

    serializer = CustomerSerializer(data=request, many=True)
    return JsonResponse({'customer':serializer.data})


@api_view(['POST','GET'])
def appDetails(request):

    data = appDetails.objects.all()
    serializer = AppDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        serializer = pd.DataFrame(data, index=[0])
        # totalratings = model.predict(serializer)[0]
        # return Response(totalratings)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view([])
# def    
    

