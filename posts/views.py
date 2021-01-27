from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Post
from .serializers.common import PostSerializer
from .serializers.populated import PopulatedPostSerializer


class PostListView(APIView):

    def get(self, _request):
        posts = Post.objects.all()
        serialized_post = PopulatedPostSerializer(posts, many=True)
        return Response(serialized_post.data, status=status.HTTP_200_OK)

