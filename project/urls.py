from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/comments/', include('comments.urls'))
]
