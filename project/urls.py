from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/chats/', include('chats.urls')),
    path('api/communications/', include('communications.urls')),
    re_path(r'^.*$', index)
]
