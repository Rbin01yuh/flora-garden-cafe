import React, { useState, useEffect } from 'react';
import { Leaf, Star, Sparkles, Phone, MapPin, Clock, Utensils, Menu, X, Navigation, MessageCircle, Heart, ShoppingBag } from 'lucide-react';

const business = {
  name: "Flora Garden Cafe & Resto",
  category: "Cafe & Family Resto",
  tagline: "Sensasi Kuliner Fusion di Tengah Taman Hijau Asri Lubuk Pakam",
  address: "Jl. Bidan No. 89, Paluh Kemiri, Kec. Lubuk Pakam, Kabupaten Deli Serdang, Sumatera Utara 20518",
  district: "Lubuk Pakam",
  coords: { lat: 3.5505, lng: 98.8520 },
  mapsEmbedUrl: "https://maps.google.com/maps?q=3.5505,98.8520&z=16&output=embed",
  googleMapsUrl: "https://maps.google.com/?q=Flora+Garden+Cafe+Lubuk+Pakam",
  hours: "11.00 – 22.00 WIB (Selasa - Minggu)",
  phone: "+62 821-6022-3533",
  whatsapp: "6282160223533",
  halal: true,
  rating: "4.9",
  reviewsCount: 380,
  established: "2021",
  aboutText: "Flora Garden Cafe & Resto menghadirkan oasis hijau di jantung Lubuk Pakam. Dikelilingi pepohonan rimbun dan taman bunga tropis, tempat ini cocok untuk makan malam keluarga, arisan, hingga acara ulang tahun dengan hidangan nusantara & internasional unggulan.",
  menu: [
    { name: "Ayam Bakar Taliwang Flora", price: "Rp 45.000", desc: "Ayam kampung muda dibakar bumbu taliwang pedas gurih disajikan dengan plecing kangkung", isPopular: true, image: "/images/hero.png" },
    { name: "Nasi Goreng Andaliman", price: "Rp 38.000", desc: "Nasi goreng khas Sumatera Utara bersensasi getar hangat rempah andaliman + udang segar", isPopular: true, image: "/images/hero.png" },
    { name: "Peanut Butter Espresso Latte", price: "Rp 28.000", desc: "Perpaduan unik espresso house-blend dengan tekstur creamy selai kacang gurih", isPopular: true, image: "/images/hero.png" },
    { name: "Chicken Pan-Grilled Herb Butter", price: "Rp 52.000", desc: "Dada ayam panggang saus mentega rempah disajikan bersama potato wedges & fresh salad", isPopular: false, image: "/images/hero.png" },
    { name: "Waffle Strawberry Vanilla Gelato", price: "Rp 32.000", desc: "Waffle renyah bertoping buah strawberry segar, saus cokelat cair dan gelato vanilla", isPopular: false, image: "/images/hero.png" },
    { name: "Crispy Enoki & Ubi Srikaya", price: "Rp 24.000", desc: "Camilan pembuka kombinasi jamur enoki krispi dan ubi manis goreng saus srikaya", isPopular: false, image: "/images/hero.png" }
  ],
  features: ["Outdoor Garden View", "Ruang VIP Ber-AC", "Area Playroom Anak", "Live Acoustic Weekend"]
};

// Custom SVG Logo for Flora Garden Cafe
function FloraGardenLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-xl bg-emerald-800 p-1.5 border border-emerald-500/50 shadow-md flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 18 Q65 38 50 58 Q35 38 50 18 Z" fill="#34D399"/>
          <path d="M18 50 Q38 65 58 50 Q38 35 18 50 Z" fill="#A7F3D0"/>
          <path d="M50 82 Q65 62 50 42 Q35 62 50 82 Z" fill="#059669"/>
          <circle cx="50" cy="50" r="10" fill="#F59E0B"/>
        </svg>
      </div>
      <div>
        <span className="text-xl font-bold tracking-tight font-playfair text-emerald-950 block leading-none">
          FLORA <span className="text-emerald-700">GARDEN</span>
        </span>
        <span className="text-[9px] text-emerald-700 font-semibold tracking-wider uppercase">Cafe & Resto • Lubuk Pakam</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7F4] text-gray-900 font-sans">

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#">
              <FloraGardenLogo />
            </a>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700">
              <a href="#tentang" className="hover:text-emerald-700 transition-colors">Tentang</a>
              <a href="#menu" className="hover:text-emerald-700 transition-colors">Menu</a>
              <a href="#lokasi" className="hover:text-emerald-700 transition-colors">Lokasi</a>
              <a href="#kontak" className="hover:text-emerald-700 transition-colors">Kontak</a>
            </nav>

            <div className="hidden sm:block">
              <a
                href={`https://wa.me/${business.whatsapp}?text=Halo%20Flora%20Garden%20Cafe,%20saya%20ingin%20reservasi%20meja.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Reservasi Meja</span>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-emerald-950">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-white border-b border-emerald-100 text-gray-900 shadow-xl">
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium border-b border-emerald-50">Tentang</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium border-b border-emerald-50">Menu Cafe</a>
            <a href="#lokasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium border-b border-emerald-50">Lokasi Maps</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium">Kontak</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="Flora Garden Cafe" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/90 via-green-50/80 to-lime-50/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto sm:mx-0 space-y-6 bg-white/75 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/80 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Oasis Kuliner Taman Lubuk Pakam</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 font-playfair leading-tight">
              Nikmati Kuliner Fusion di Tengah <span className="text-emerald-700">Taman Asri</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              {business.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-1.5 text-amber-600">
                <Star className="w-5 h-5 fill-amber-500" />
                <span className="font-bold text-gray-900 text-base">{business.rating}</span>
                <span>({business.reviewsCount} Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <Clock className="w-5 h-5" />
                <span>Selasa - Minggu: 11.00-22.00</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a href="#menu" className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <Utensils className="w-4 h-4" />
                <span>Jelajahi Menu Cafe</span>
              </a>
              <a href={`https://wa.me/${business.whatsapp}?text=Halo%20Flora%20Garden%20Cafe,%20saya%20ingin%20reservasi.`} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Reservasi Tempat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="scroll-mt-24 py-24 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Suasana & Profil Cafe
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-emerald-950">
              Pengalaman Santai Berdua Maupun Bersama Keluarga
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {business.aboutText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-2">Fasilitas Utama</span>
                <h3 className="text-2xl font-bold font-playfair text-emerald-950 mb-4">
                  Taman Hijau Terbuka, Ruang Ber-AC & Area Anak
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Dirancang untuk kenyamanan menyeluruh. Nikmati santapan di bawah pepohonan segar atau ruang ber-AC yang tenang untuk meeting informal.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {business.features.map((feat, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl text-center shadow-sm border border-emerald-100 text-xs font-bold text-emerald-900">
                    🌿 {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-emerald-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <Sparkles className="w-8 h-8 text-emerald-300 mb-4" />
                <h3 className="text-xl font-bold font-playfair mb-3">Reservasi & Acara</h3>
                <p className="text-emerald-100 text-xs leading-relaxed mb-6">
                  Melayani pesanan meja ulang tahun, reuni keluarga, gathering kantor, hingga paket catering khusus.
                </p>
              </div>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-center font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Hubungi Admin WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="scroll-mt-24 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Sajikan Kuliner Selection
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-emerald-950">
            Menu Makanan & Minuman
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Kombinasi hidangan khas nusantara berbumbu kaya dan aneka racikan kopi & dessert penutup segar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.menu.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 border shadow-sm hover:shadow-xl bg-white border-emerald-100 hover:border-emerald-300 flex flex-col justify-between">
              {item.image && (
                <div className="relative h-44 w-full overflow-hidden bg-emerald-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-lg font-bold tracking-tight font-playfair text-emerald-950">{item.name}</h4>
                    {item.isPopular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-700 text-white shadow-sm shrink-0">
                        <Heart className="w-3 h-3 fill-white" />
                        <span>Chef Pick</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-emerald-50 mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Harga</span>
                    <span className="text-lg font-extrabold tracking-tight text-emerald-800">{item.price}</span>
                  </div>
                  <a href={`https://wa.me/${business.whatsapp}?text=Halo%20Flora%20Garden,%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-md transition-all hover:scale-105 inline-flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section id="lokasi" className="scroll-mt-24 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-emerald-100 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-emerald-100">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-block mb-2">
                Kecamatan {business.district}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-emerald-950">
                Lokasi & Petunjuk Arah
              </h3>
            </div>
            <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span>Buka Google Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Alamat Cafe</h4>
                  <p className="text-xs font-medium text-gray-800">{business.address}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Jam Buka</h4>
                  <p className="text-xs font-medium text-gray-800">{business.hours}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Telepon</h4>
                  <p className="text-xs font-medium text-gray-800">{business.phone}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[350px] rounded-2xl overflow-hidden border border-emerald-100">
              <iframe title="Map Flora Garden Cafe" src={business.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="scroll-mt-24 pt-16 pb-12 bg-emerald-950 border-t border-emerald-900 text-emerald-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-emerald-900">
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-playfair text-white">{business.name}</h3>
              <p className="text-emerald-300 max-w-md">{business.tagline}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navigasi</h4>
              <ul className="space-y-1.5">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu Cafe</a></li>
                <li><a href="#lokasi" className="hover:text-white transition-colors">Lokasi Maps</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">Kontak</h4>
              <p>{business.address}</p>
              <p className="text-emerald-400 font-bold">{business.phone}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-emerald-500">
            <p>© {new Date().getFullYear()} Flora Garden Cafe. All rights reserved.</p>
            <p>Deli Serdang, Sumatera Utara</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
      </a>
    </div>
  );
}
