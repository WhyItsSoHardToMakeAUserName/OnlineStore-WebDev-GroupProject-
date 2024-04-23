from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import CategorySerializer

from .models import Category, Size

@api_view(['GET'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many = True)
        return Response(serializer.data)
