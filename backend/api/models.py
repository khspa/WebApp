from django.db import models
from django.conf import settings
import uuid

class Transaction(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        ordering = ('time',)

class Product(models.Model):

    LOAN_TYPE = (
        ('S', "Student Loan"),
        ('P', "Personal Loan"),
        ('M', "House/Car Loan"),
        ('B', "Business Loan"),
        ('O', "Others")
    )

    STATUS = (
        ('A', 'available'),
        ('M', 'maintenance')
    )

    productId = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=200)
    type = models.CharField(
        max_length = 1,
        choices = LOAN_TYPE,
    )
    max_amount = models.IntegerField()
    max_duration = models.DurationField()
    interest_rate = models.DecimalField(max_digits=10, decimal_places=5)


class Loan(models.Model):

    STATUS = (
        ('P', 'P'),
        ('U', 'Unpaid'),
        ('O', 'Overdue'),
        ('F', 'Flaw')
    )

    LID = models.UUIDField(primary_key=True, default=uuid.uuid4)
    timestamp = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length = 1,
        choices = STATUS,
    )
    pid = models.ForeignKey("Product", on_delete=models.RESTRICT)
    uid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class Transaction(models.Model):

    TID = models.UUIDField(primary_key=True, default=uuid.uuid4)
    UID = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    LID = models.ForeignKey("Loan", on_delete=models.CASCADE)
