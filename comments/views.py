from  rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .serializers.common import CommentSerializer
from .models import Comment

class CommentsListView(APIView):
    """ Handles POST request to /comments/ endpoint """

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data["owner"] = request.user.id
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentsDetailView(APIView):
    """ Handle DELETE requests to /comments/<pk>/ """

    permission_classes = (IsAuthenticated, )

    def delete(self, request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk)
            if comment_to_delete.owner.id != request.user.id:
                raise PermissionDenied()
            comment_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Comment.DoesNotExist:
            raise NotFound()
