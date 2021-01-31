from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers.common import ChatSerializer

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