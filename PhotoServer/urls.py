from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'photos',views.PhotoViewSet)

urlpatterns = [
    url(r'api/',include(router.urls)),
]
