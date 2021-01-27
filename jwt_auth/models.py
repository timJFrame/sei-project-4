from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    bio = models.TextField(max_length=500)
    profile_image = models.CharField(max_length=300)
    friended_by = models.ManyToManyField(
        'jwt_auth.User',
        related_name="friended_users",
        blank=True
    )
