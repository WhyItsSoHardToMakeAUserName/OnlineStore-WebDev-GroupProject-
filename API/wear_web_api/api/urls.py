from django.contrib import admin
from django.urls import path

from .views_category import category_list, category_details
from.views_size import size_list, size_details

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:id>', category_details),
    path('sizes/', size_list),
    path('sizes/<int:id>', size_details),
]