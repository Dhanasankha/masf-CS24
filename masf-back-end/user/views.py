from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes 
from rest_framework.response import Response
from rest_framework import status
from rest_framework import status
from user.serializers import UserSerializer
# Create your views here.


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({},status=status.HTTP_201_CREATED)