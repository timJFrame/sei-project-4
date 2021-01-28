from comments.serializers.populated import PopulatedCommentSerializer
from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import PostSerializer

class PopulatedPostSerializer(PostSerializer):
    """ Used for all outgoing serialization  """

    comments = PopulatedCommentSerializer(many=True)
    owner = NestedUserSerializer()
    liked_by = NestedUserSerializer(many=True)
    