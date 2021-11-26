from django.contrib import admin
from .models import Transaction, Loan, Product

admin.site.register(Transaction)
admin.site.register(Loan)
admin.site.register(Product)