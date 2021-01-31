from django.urls import path
from .views import RegisterView, LoginView, ProfileView, UserDetailView, UserFriendView, UserListView

urlpatterns = [
    path('', UserListView.as_view()),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('user/<int:pk>/', UserDetailView.as_view()),
    path('user/<int:pk>/friend/', UserFriendView.as_view())
]

