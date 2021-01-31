from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import CommunicationSerializer

class PopulatedCommunicationSerializer(CommunicationSerializer):

    sender = NestedUserSerializer()
    receiver = NestedUserSerializer()