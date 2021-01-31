from django.db import models

class Communication(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField(max_length=500)
    chat = models.ForeignKey(
        'chats.Chat',
        related_name="communications",
        on_delete=models.CASCADE
    )
    sender = models.ForeignKey(
        'jwt_auth.User',
        related_name="sent_communications",
        on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        'jwt_auth.User',
        related_name="received_communications",
        on_delete = models.CASCADE
    )
