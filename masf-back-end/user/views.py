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

import joblib
import numpy as np
import pandas as pd





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

# def makePrediction(details):

#     model = joblib.load('F:\WorkStuff\IIT\SEM2\SDGP\masf-CS24\masf-CS24\masf-back-end\user\python_playstore')
#     x = details["category"]
#     y = details["prize"]
#     z = details["size"]

#     try:
#         category = encoder.transform([x])[0]
#     except ValueError:
#         return "Unrecognized category"
    
#     X = np.array([category,y, z])
#     prediction = model.predict(X)
#     return prediction[0]

    # success_category = pd.cut([installs], bins=bins, labels=labels)[0]
    # print(x)
    # print(y)
    # print(z)
    # category = encoder.transform([[details["category"]]])
    # X = np.array([category[0], float(details['prize']), float(details['size'])])

    # prediction = model.predict(X)

    # return prediction[0]


@api_view(['POST','GET'])
def appDetails(request):
    serializer = AppDetailsSerializer(data=request.data)
        
    if serializer.is_valid():
        serializer.save()
        data = serializer.validated_data
        # outcome = makePrediction(data)
        # print(outcome)
        # return JsonResponse({'prediction': outcome})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view([])
# def    
    

