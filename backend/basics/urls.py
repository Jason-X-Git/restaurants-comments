# from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
# from basics import views
from django.urls import path
#
#
# urlpatterns = [
#     url(r'^restaurants/$', views.RestaurantList.as_view(), name='restaurant-list'),
#     url(r'^restaurants/(?P<slug>[\w\-]+)/$', views.RestaurantDetail.as_view()),
#     path('', views.api_root),
# ]

# urlpatterns = format_suffix_patterns(urlpatterns)
#
# from basics.views import RestaurantViewSet, api_root
# from rest_framework import renderers
#
# restaurant_list = RestaurantViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
#
# restaurant_detail = RestaurantViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })

# restaurant_highlight = RestaurantViewSet.as_view({
#     'get': 'highlight'
# }, renderer_classes=[renderers.StaticHTMLRenderer])

# urlpatterns = format_suffix_patterns([
#     path('', api_root),
#     path('restaurants/', restaurant_list, name='restaurant-list'),
#     path(r'^restaurants/(?P<slug>[\w\-]+)/$', restaurant_detail, name='restaurant-detail'),
# ])

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from basics import views
from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title='Pastebin API')

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'restaurants', views.RestaurantViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'comments', views.CommentViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('schema/', schema_view),
    path('/', include(router.urls)),
]