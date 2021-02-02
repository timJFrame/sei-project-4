from django.urls import path
from .views import ChatListView, ChatDetaileView

urlpatterns = [
    path("", ChatListView.as_view()),
    path("<int:pk>/", ChatDetaileView.as_view())
]
