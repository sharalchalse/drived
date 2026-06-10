import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Programs from '@/components/programs';
import WhyChoose from '@/components/why-choose';
import Timeline from '@/components/timeline';
import Testimonials from '@/components/testimonials';
import Gallery from '@/components/gallery';
import VideoGallery from '@/components/video-gallery';
import FAQ from '@/components/faq';
import ContactForm from '@/components/contact-form';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChoose />
      <Timeline />
      <Testimonials />
      <Gallery />
      <VideoGallery />
      <FAQ />
      {/* <ContactForm /> */} 
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
