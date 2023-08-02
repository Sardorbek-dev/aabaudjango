from django.db import models
from django.urls import reverse
from django.core import validators

class ContactUs(models.Model):
    select_salutation = (
        ('herr', 'Herr'),
        ('frau', 'Frau'),
    )
    salutation = models.CharField(max_length=10, choices=select_salutation, default='herr')
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=80, validators=[validators.EmailValidator(message="Invalid Email")])
    phone_number = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    zip_code = models.IntegerField()
    subject =models.CharField(max_length=100)
    content = models.TextField(verbose_name="Schreiben Sie hier unten Ihre Nachricht")
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.firstname)

    def get_absolute_url(self):
        return reverse('contact')
