from django.shortcuts import render, redirect
from django.views.generic import TemplateView, CreateView
from .forms import ContactUsForm, CustomerReviewForm
from django.urls import reverse_lazy
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from .models import CustomerReview

# Create your views here.
class HomePageView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['reviews'] = CustomerReview.objects.all()
        print('context: ', context)
        return context

class AboutPageView(TemplateView):
    template_name = 'about.html'

class ContactCreateView(TemplateView):
#    form_class = ContactUsForm
    template_name = 'contact.html'

class ProcessView(TemplateView):
    template_name = 'process.html'

class OurServicesView(TemplateView):
    template_name = 'our-services.html'

class StreichenView(TemplateView):
    template_name = 'streichen.html'

class FliesenVerlegenView(TemplateView):
    template_name = 'fliesen-verlegen.html'

class SpachtelnView(TemplateView):
    template_name = 'spachteln.html'

class TuerEinrichtenView(TemplateView):
    template_name = 'tuer-einrichten.html'

class TapezierenView(TemplateView):
    template_name = 'tapezieren.html'

class MoebelAufbauenView(TemplateView):
    template_name = 'moebel-aufbauen.html'

class LaminatParkettView(TemplateView):
    template_name = 'laminat-parkett.html'

class GipskartonplatteView(TemplateView):
    template_name = 'gipskartonplatte.html'

class ImpressumView(TemplateView):
    template_name = 'impressum.html'

class DataProtectionView(TemplateView):
    template_name = 'data-protection.html'


class ContactCreateView(CreateView):
    form_class = ContactUsForm
    template_name = 'contact.html'

    def form_valid(self, form):
        try:
            form.instance.author = self.request.user

            #send email
            template = render_to_string('email_template.html', {'name': self.request.POST['firstname']})
            email = EmailMessage(
                'Info A+A Bau Team',
                template,
                settings.EMAIL_HOST_USER,
                [self.request.POST['email']]
            )
            fail_silently = False
            email.send()

            return super().form_valid(form)
        except Exception as e:
            messages.error(self.request, f"An error occurred: {e}")
            return self.form_invalid(form)

    def test_func(self):
        return self.request.user.is_superuser

    def get_success_url(self):
        success_text = 'Vielen Dank! Ihre Anfrage ist eingegangen.<br> ' \
                       'Ihre Nachricht wurde erfolgreich übermittelt. Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen! <br>'\
                       '<br>' \
                       'Mit freundlichen Grüßen,<br>' \
                       'A+A Bau Team'
        messages.success(self.request, success_text)
        return reverse_lazy('contact')


class ReviewCreateView(CreateView):
    form_class = CustomerReviewForm
    template_name = 'send-review.html'

    def form_valid(self, form):
        try:
            form.instance.author = self.request.user

            #send email
            template = render_to_string('email-template-success-review.html')
            email = EmailMessage(
                'Bewertung erfolgreich eingereicht',
                template,
                settings.EMAIL_HOST_USER,
                [self.request.POST['reviewer_email']]
            )
            fail_silently = False
            email.send()

            return super().form_valid(form)
        except Exception as e:
            messages.error(self.request, f"An error occurred: {e}")
            return self.form_invalid(form)

    def get_success_url(self):
        success_text = 'Vielen Dank! Ihre Bewertung ist eingegangen. <br>' \
                       'Ihre Bewertung wurde erfolgreich übermittelt. Wir schätzen Ihr Feedback sehr.<br> ' \
                       'Bei Fragen oder weiteren Anliegen stehen wir Ihnen gerne zur Verfügung!<br>' \
                       '<br>' \
                       'Mit freundlichen Grüßen,<br>' \
                       'A+A Bau Team'
        messages.success(self.request, success_text)
        return reverse_lazy('send-review')