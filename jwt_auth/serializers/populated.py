
from posts.serializers.populated import PopulatedPostSerializer
from chats.serializers.populated import PopulatedChatSerializer
from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import UserSerializer, NestedUserSerializer


class PopulatedUserSerializer(UserSerializer):

    created_posts = PopulatedPostSerializer(many=True)
    liked_posts = PopulatedPostSerializer(many=True)
    friended_by = NestedUserSerializer(many=True)
    posted_comments = PopulatedCommentSerializer(many=True)
    created_chats = PopulatedChatSerializer(many=True)
    