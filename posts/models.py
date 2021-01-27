from django.db import models

class Post(models.Model):
    post_text = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    post_image = models.CharField(max_length=300)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_posts',
        on_delete=models.CASCADE
    )
    liked_by = models.ManyToManyField(
        'jwt_auth.User',
        related_name='liked_posts',
        blank=True
    )




