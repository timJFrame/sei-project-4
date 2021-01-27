from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import PostSerializer

class PopulatedPostSerializer(PostSerializer):
    """ Used for all outgoing serialization  """

    owner = NestedUserSerializer()