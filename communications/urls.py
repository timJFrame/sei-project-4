from django.urls import path
from .views import CommunicationListView

urlpatterns = [
    path('', CommunicationListView.as_view())
]
