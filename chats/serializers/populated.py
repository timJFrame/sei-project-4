from communications.serializers.populated import PopulatedCommunicationSerializer
from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import ChatSerializer

class PopulatedChatSerializer(ChatSerializer):

    owner = NestedUserSerializer()
    recipient = NestedUserSerializer()
    communications = PopulatedCommunicationSerializer(many=True)