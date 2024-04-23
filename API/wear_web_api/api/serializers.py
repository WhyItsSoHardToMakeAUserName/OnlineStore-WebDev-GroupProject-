from rest_framework import serializers
from .models import Category, Size

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 25)
    
    def create(self, validated_data):
        return Category.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    
class SizeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    size = serializers.CharField(max_length = 20)
    
    def create(self, validated_data):
        return Size.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.size = validated_data.get('size', instance.size)
        instance.save()
        return instance

