from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
