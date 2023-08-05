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


class CustomerReview(models.Model):
    select_salutation_review_choices = (
        ('herr', 'Herr'),
        ('frau', 'Frau'),
    )
    rating_scale = (
        ('1', '1 (Sehr unzufrieden)'),
        ('2', '2 (Unzufrieden)'),
        ('3', '3 (Neutral)'),
        ('4', '4 (Zufrieden)'),
        ('5', '5 (Sehr zufrieden)'),
    )
    projectType_choices = (
        ('neubau', 'Neubau'),
        ('renovierung', 'Renovierung'),
        ('umbau', 'Umbau'),
        ('industrieprojekt', 'Industrieprojekt'),
        ('andere', 'andere'),
    )
    confirmation_choices = (
        ('ja', 'Ja'),
        ('nein', 'Nein'),
    )
    reviewer_salutation = models.CharField(
        max_length=10,
        choices=select_salutation_review_choices,
        default='herr'
    )
    reviewer_firstname = models.CharField(max_length=50)
    reviewer_lastname = models.CharField(max_length=50)
    reviewer_email = models.CharField(
        max_length=80,
        validators=[validators.EmailValidator(message="Invalid Email")]
    )
    reviewer_projectType = models.CharField(
        max_length=50,
        verbose_name="Art des Projekts",
        choices=projectType_choices,
        default='neubau'
    )
    reviewer_rating = models.CharField(
        max_length=10,
        verbose_name="Gesamtbewertung",
        choices=rating_scale,
        default='5'
    )
    reviewer_content = models.TextField(verbose_name="Schreiben Sie hier unten Ihre Nachricht")
    reviewer_confirmation = models.CharField(
        max_length=10,
        verbose_name="Dürfen wir Ihre Bewertung auf unserer Website oder Marketingmaterialien veröffentlichen?",
        choices=confirmation_choices,
        default='ja'
    )
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.reviewer_firstname)

    def get_absolute_url(self):
        return reverse('send-review')
