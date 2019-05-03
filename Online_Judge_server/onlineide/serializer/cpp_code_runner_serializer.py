from rest_framework import serializers

class RunCodeSerializer(serializers.Serializer):
    value = serializers.CharField(required=True)
    input = serializers.CharField(required=True)
