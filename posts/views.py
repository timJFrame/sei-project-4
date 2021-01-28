from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .serializers.common import PostSerializer
from .serializers.populated import PopulatedPostSerializer

from .models import Post


class PostListView(APIView):
    """ Hanldles GET and POST requests made to /posts/ endpoint  """

    def get(self, _request):
        posts = Post.objects.all()
        serialized_post = PopulatedPostSerializer(posts, many=True)
        return Response(serialized_post.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        post_to_create = PostSerializer(data=request.data)
        if post_to_create.is_valid():
            post_to_create.save()
            return Response(post_to_create.data, status=status.HTTP_201_CREATED)
        return Response(post_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class PostDetailView(APIView):
    """ Hanldes GET/PUT/DELETE requests made to /posts/pk/ endoint  """

    permission_classes = (IsAuthenticatedOrReadOnly, )


    def get_post(self, pk):
        """ Returns posts from db by pk or responds 404 not found """
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise NotFound()


    def get(self, _request, pk):
        post = self.get_post(pk=pk)
        serialized_post = PopulatedPostSerializer(post)
        return Response(serialized_post.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        request.data['owner'] = request.user.id
        post_to_update = self.get_post(pk=pk)
        if post_to_update.owner.id != request.user.id:
            raise PermissionDenied()
        updated_post = PostSerializer(post_to_update, data=request.data)
        if updated_post.is_valid():
            updated_post.save()
            return Response(updated_post.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_post.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        post_to_delete = self.get_post(pk=pk)
        if post_to_delete.owner.id != request.user.id:
            raise PermissionDenied()
        post_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PostLikeView(PostDetailView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        post_to_like = self.get_post(pk=pk)
        post_to_like.liked_by.add(request.user.id)
        post_to_like.save()
        serialized_liked_post = PopulatedPostSerializer(post_to_like)
        return Response(serialized_liked_post.data, status=status.HTTP_201_CREATED)