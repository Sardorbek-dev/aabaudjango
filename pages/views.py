from django.shortcuts import render
from django.views.generic import TemplateView

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