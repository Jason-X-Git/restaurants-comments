from rest_framework import serializers
from .models import *
# from django.contrib.auth.models import User
from users.models import CustomUser


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    restaurant = serializers.SlugRelatedField(slug_field='chinese_name',
                                              queryset=Restaurant.objects.all(),
                                              )

    #
    # restaurant = serializers.HyperlinkedRelatedField(read_only=True,
    #                                                  view_name='restaurant-detail',
    #                                                  lookup_field='slug')

    class Meta:
        model = Comment
        fields = ('url', 'owner', 'restaurant',
                  'title', 'content')


class RestaurantSerializer(serializers.HyperlinkedModelSerializer):
    # comments = serializers.HyperlinkedRelatedField(
    #     many=True,
    #     read_only=True,
    #     view_name='comment-detail',
    # )

    # comments = CommentSerializer(many=True)

    class Meta:
        model = Restaurant
        fields = ('id', 'url', 'english_name', 'chinese_name', 'address',
                  'web_site', 'phone', 'introduction', 'hours',
                  'longitude', 'latitude',
                  'city', 'quadrant')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'id'}
        }


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # comments = serializers.HyperlinkedRelatedField(many=True, view_name='comment-detail',
    #                                                read_only=True)
    # comments = CommentSerializer(many=True)

    class Meta:
        model = CustomUser
        fields = ('url', 'id', 'username', 'email')
