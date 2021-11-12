from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    registerName = serializers.CharField(write_only=True, required=True)
    registerPassword = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    ConfirmPassword = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('registerName', 'registerPassword', 'ConfirmPassword', 'email')

    def validate(self, attrs):

        errors = {}

        name_record = User.objects.filter(username=attrs['registerName']).first()
        email_record = User.objects.filter(email=attrs['email']).first()

        if email_record:
            errors["email"] = "Email has already been taken."

        if name_record:
            errors["registerName"] = "Username has already been taken."

        if attrs['registerPassword'] != attrs['ConfirmPassword']:
            errors["registerPassword"] = "Password fields didn't match."

        if errors:
            raise serializers.ValidationError(errors)

        return super().validate(attrs)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['registerName'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['registerPassword'])
        user.save()

        return user