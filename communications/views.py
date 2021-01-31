from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from .serializers.common import CommunicationSerializer

class CommunicationListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['sender'] = request.user.id
        communication_to_create = CommunicationSerializer(data=request.data)
        if communication_to_create.is_valid():
            communication_to_create.save()
            return Response(communication_to_create.data, status=status.HTTP_201_CREATED)
        return Response(communication_to_create.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
