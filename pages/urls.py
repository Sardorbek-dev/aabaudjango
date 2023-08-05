from django.urls import path, include
from .views import HomePageView, AboutPageView, ContactCreateView, ProcessView, OurServicesView, StreichenView, \
    FliesenVerlegenView, SpachtelnView, TuerEinrichtenView, TapezierenView, MoebelAufbauenView, LaminatParkettView, GipskartonplatteView, \
    ImpressumView, DataProtectionView, ReviewCreateView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about', AboutPageView.as_view(), name='about'),
    path('contact', ContactCreateView.as_view(), name='contact'),
    path('process', ProcessView.as_view(), name='process'),
    path('our-services', OurServicesView.as_view(), name='our-services'),
    path('send-review', ReviewCreateView.as_view(), name='send-review'),
    path('streichen', StreichenView.as_view(), name='streichen'),
    path('fliesen-verlegen', FliesenVerlegenView.as_view(), name='fliesen-verlegen'),
    path('spachteln', SpachtelnView.as_view(), name='spachteln'),
    path('tuer-einrichten', TuerEinrichtenView.as_view(), name='tuer-einrichten'),
    path('tapezieren', TapezierenView.as_view(), name='tapezieren'),
    path('moebel-aufbauen', MoebelAufbauenView.as_view(), name='moebel-aufbauen'),
    path('laminat-parkett', LaminatParkettView.as_view(), name='laminat-parkett'),
    path('gipskartonplatte', GipskartonplatteView.as_view(), name='gipskartonplatte'),
    path('impressum', ImpressumView.as_view(), name='impressum'),
    path('data-protection', DataProtectionView.as_view(), name='data-protection'),
]
