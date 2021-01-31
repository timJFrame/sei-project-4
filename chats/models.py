from django.db import models

class Chat(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_chats',
        on_delete=models.CASCADE
    )
    recipient = models.ForeignKey(
        'jwt_auth.User',
         related_name='received_chats',
         on_delete= models.CASCADE
    )
