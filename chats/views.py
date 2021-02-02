from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .serializers.common import ChatSerializer
from .models import Chat

class ChatListView(APIView):
    """ Handles POST requests make to /chats/ endpoint  """

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['owner'] = request.user.id
        chat_to_create = ChatSerializer(data=request.data)
        if chat_to_create.is_valid():
            chat_to_create.save()
            return Response(chat_to_create.data, status=status.HTTP_201_CREATED)
        return Response(chat_to_create.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)

class ChatDetaileView(APIView):
    """ Handles delete requests to /chats/<pk> """

    permission_classes = (IsAuthenticated, )

    def delete(self, request, pk):
        try:
            chat_to_delete = Chat.objects.get(pk=pk)
            if chat_to_delete.owner.id != request.user.id:
                raise PermissionDenied()
            chat_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Chat.DoesNotExist:
            raise NotFound()