from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from user.serializers import UserSerializer
from user.serializers import CustomerSerializer
from user.models import Customer
# invoke serializer and return to client.



@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({},status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def customers(request):
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({'customer':serializer.data})
