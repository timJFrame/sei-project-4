from posts.serializers.common import PostSerializer
from comments.serializers.common import CommentSerializer
from ..serializers.common import UserSerializer, NestedUserSerializer


class PopulatedUserSerializer(UserSerializer):

    created_posts = PostSerializer(many=True)
    liked_posts = PostSerializer(many=True)
    friended_by = NestedUserSerializer(many=True)
    posted_comments = CommentSerializer(many=True)
    