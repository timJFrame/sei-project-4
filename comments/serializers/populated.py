from jwt_auth.serializers.common import NestedUserSerializer
from posts.serializers.common import PostSerializer
from ..serializers.common import CommentSerializer


class PopulatedCommentSerializer(CommentSerializer):

    owner = NestedUserSerializer()
    post = PostSerializer()