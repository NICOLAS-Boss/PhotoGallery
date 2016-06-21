from django.conf.urls import url, include, static
from django.contrib import admin
from . import settings
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('Client.urls')),
    url(r'^photoserver/',include('PhotoServer.urls')),
]+ static.static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
