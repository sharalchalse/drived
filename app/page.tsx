import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Programs from '@/components/programs';
import WhyChoose from '@/components/why-choose';
import Timeline from '@/components/timeline';
import MotionProvider from '@/components/motion-provider';
import Footer from '@/components/footer';

// Sections further down the page are split into separate JavaScript chunks so
// they don't hold up the first screen. They are still server-rendered, so their
// text stays in the HTML for Google.
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Gallery = dynamic(() => import('@/components/gallery'));
const FAQ = dynamic(() => import('@/components/faq'));
const WhatsAppButton = dynamic(() => import('@/components/whatsapp-button'));
// import VideoGallery from '@/components/video-gallery';
// import ContactForm from '@/components/contact-form';

export default function Page() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <WhyChoose />
        <Timeline />
        <Testimonials />
        <Gallery />
        {/* <VideoGallery /> */}
        <FAQ />
        {/* <ContactForm /> */}
        <Footer />
        <WhatsAppButton />
      </main>
    </MotionProvider>
  );
}
