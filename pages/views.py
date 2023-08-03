from django.shortcuts import render, redirect
from django.views.generic import TemplateView, CreateView
from .forms import ContactUsForm
from django.urls import reverse_lazy
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string

# Create your views here.
class HomePageView(TemplateView):
    template_name = 'home.html'

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
        messages.success(self.request, 'Ihre Nachricht wurde erfolgreich gesendet!')
        return reverse_lazy('contact')
