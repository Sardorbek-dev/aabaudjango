from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from .forms import ContactUsForm
from django.urls import reverse_lazy
from django.contrib import messages

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
    success_url = reverse_lazy('contact')

    def form_valid(self, form):
        try:
            form.instance.author = self.request.user
            return super().form_valid(form)
        except Exception as e:
            messages.error(self.request, f"An error occurred: {e}")
            return self.form_invalid(form)

    def test_func(self):
        return self.request.user.is_superuser


#
# def contact(request):
#     print('test-request: ', request);
#     if request.method == "POST":
#         customer_firstname = request.POST['customer-firstname']
#         customer_lastname = request.POST['customer-lastname']
#         customer_email = request.POST['customer-email']
#         customer_phone = request.POST['customer-phone']
#         customer_street = request.POST['customer-street']
#         customer_postcode = request.POST['customer-postcode']
#         customer_subject = request.POST['customer-subject']
#         customer_message = request.POST['customer-message']
#         return render(request, 'contact.html', {'customer_firstname': customer_firstname});
#
#     else:
#         return render(request, 'contact.html', {});

