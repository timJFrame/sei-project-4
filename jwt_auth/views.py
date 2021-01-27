from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied, NotFound
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt


from .serializers.common import UserSerializer
from .serializers.populated import PopulatedUserSerializer
User = get_user_model()



class RegisterView(APIView):
    '''  Controller for post request to /auth/login '''

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration Successful'}, status=status.HTTP_201_CREATED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):
    ''' Controller for request to /auth/login  '''

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail='Invalid Credentials')
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail='Invalid Credentials')
        expiry_time = datetime.now() + timedelta(days=7)
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(expiry_time.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        return Response(
            {'token': token, 'message': f'Welcome Back {user_to_login}'}
        )

class ProfileView(APIView):

    ''' Controller for request to /auth/profile Handles logged in users profile  '''


    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)


class UserDetailView(APIView):
    """ Controller responsible for getting single user profile at auth/user/id endpoint  """

    def get(self, _request, pk):
        try:
            user = User.objects.get(pk=pk)
            serialized_user = PopulatedUserSerializer(user)
            return Response(serialized_user.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            raise NotFound()
       
class UserFriendView(APIView):
    """ Controller responsible for friending users at auth/user/id/friend endpoint """

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        try:
            user_to_friend = User.objects.get(pk=pk)
            user_to_friend.friended_by.add(request.user.id)
            user_to_friend.save()
            serialized_freinded_user = PopulatedUserSerializer(user_to_friend)
            return Response(serialized_freinded_user.data, status=status.HTTP_201_CREATED)
        except User.DoesNotExist:
            raise NotFound()