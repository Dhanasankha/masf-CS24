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
from user.models import ApplicationDetails
from sklearn.preprocessing import LabelEncoder
import joblib
import numpy as np
import pandas as pd

from user.model_test import model
from user.model_test import encoder

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({},status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def customers(request):
    data = Customer.objects.all()

    serializer = CustomerSerializer(data=request, many=True)
    return JsonResponse({'customer':serializer.data})

# encoder.classes_ = np.load('classes.npy')

def makePrediction(details):
    # model = joblib.load("F:\WorkStuff\IIT\SEM2\SDGP\masf-CS24\masf-CS24\masf-back-end\user\final_model")
    x = details["category"]
    y = details["prize"]
    z = details["size"]
    
    x = encoder.transform([x])[0]
    installs = model.predict([[x, y, z]])[0]

    return installs

@api_view(['POST'])
def appDetails(request):
    if request.method == "POST":
        serializer = AppDetailsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            data = serializer.validated_data
            outcome = makePrediction(data)
            print(f'No of installs are {outcome}')
            return JsonResponse({'prediction': outcome})

    # if request.method == "GET":
    #         serializer = AppDetailsSerializer(data=request.data)
    #         print(serializer)
    #         if serializer.is_valid():  
               
            
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

