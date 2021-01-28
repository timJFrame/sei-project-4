from django.urls import path
from .views import CommentsListView, CommentsDetailView

urlpatterns = [
    path("", CommentsListView.as_view()),
    path("<int:pk>/", CommentsDetailView.as_view())
]
