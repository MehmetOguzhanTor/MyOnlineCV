export default {
  meta: {
    title: 'Mehmet Oğuzhan Tor · Gereksinim ve Sistem Mühendisi',
    description:
      "Münih'te güvenli telsiz sistemleri için gereksinim ve sistem mühendisliği yapan elektrik-elektronik mühendisi. Geçmişi RF test, sinyal işleme ve insansız hava araçları.",
  },
  nav: { about: 'Hakkımda', projects: 'Projeler', experience: 'Deneyim', cv: 'CV', now: 'Şu an', contact: 'İletişim' },
  role: 'Gereksinim ve Sistem Mühendisi · RF ve sinyal işleme',
  lede:
    "Münih'te yaşayan bir elektrik-elektronik mühendisiyim. Rohde & Schwarz'da güvenli telsiz sistemlerinin gereksinimlerini yazıyorum. Geçmişim RF test, sayısal sinyal işleme ve insansız hava araçları üzerine.",
  cta: { experience: 'Deneyimime bak', contact: 'İletişime geç' },
  h: { projects: 'projeler', experience: 'deneyim', now: 'şu an', contact: 'iletişim' },
  projects: [
    {
      when: '2019',
      title: 'Otonom İHA',
      text: 'TÜBİTAK İHA yarışması için görevlerini kendi başına tamamlayan bir İHA tasarlayıp ürettik. Projeyi IEEE Bilkent başkan yardımcısı olarak yönettim.',
      tags: ['Uçuş kontrolü', 'Modelleme', 'Takım liderliği'],
    },
    {
      when: 'FPGA',
      title: 'Konuşulan rakam tanıma',
      text: 'Söylenen rakamları gerçek zamanlı tanıyan sistem. Sinyal işleme BASYS3 kartında VHDL ile yazıldı.',
      tags: ['VHDL', 'DSP', 'BASYS3'],
    },
    {
      when: 'FPGA',
      title: 'Mini theremin',
      text: 'Dokunmadan çalınan bir enstrüman: ultrasonik sensör perdeyi belirliyor, sesi FPGA üretiyor.',
      tags: ['VHDL', 'HC-SR04', 'Ses'],
    },
    {
      when: 'Pi',
      title: 'Akıllı ev',
      text: 'Raspberry Pi üzerinde ev otomasyonu, kendi yazdığım Android uygulamasıyla kontrol.',
      tags: ['Python', 'Raspberry Pi', 'Android'],
    },
  ],
  experience: [
    {
      when: 'Tem 2025 – şimdi',
      title: 'Gereksinim Mühendisi',
      org: 'Rohde & Schwarz (K-tronik aracılığıyla), Münih',
      text: 'Güvenli bir yazılım tabanlı telsizin sistem gereksinimlerini net ve test edilebilir gereksinimlere ayırıyor, her birini nasıl doğrulanacağına bağlıyorum.',
    },
    {
      when: 'Eki 2024 – Haz 2025',
      title: 'Yazılım Entegrasyon ve Test Mühendisi',
      org: 'Rohde & Schwarz (K-tronik aracılığıyla), Münih',
      text: '2G–5G hücresel standartlar için RF alt sistemlerini devreye aldım ve doğruladım. Donanım/yazılım hatalarını ayıkladım, regresyon testlerini Python ile otomatikleştirdim.',
    },
    {
      when: 'Tem 2023 – Eyl 2024',
      title: "Almanya'ya taşınma",
      org: 'Ankara → Münih',
      text: "Almanya'ya taşındım, Almanca çalıştım ve programlama ile veri analizi projelerine devam ettim.",
    },
    {
      when: 'Haz 2021 – Haz 2023',
      title: 'Sayısal Sinyal İşleme Mühendisi',
      org: 'Anayurt Teknoloji ve Savunma, Ankara',
      text: 'HF/VHF/UHF haberleşme sistemleri tasarladım, FSK/PSK demodülatörleri geliştirdim, radar sinyallerini sınıflandırdım ve İHA uçuş kontrolü üzerinde çalıştım.',
    },
    {
      when: '2019 – 2020',
      title: 'Stajlar',
      org: 'ATEL Savunma · Türk Telekom',
      text: "Ar-Ge'de donanım optimizasyonu, MPLS ve DSLAM iletim sistemlerinin işletimi.",
    },
    {
      when: '2022',
      title: 'Lisans, Elektrik ve Elektronik Mühendisliği',
      org: 'Bilkent Üniversitesi, Ankara',
      text: 'Eğitim tamamen İngilizce.',
    },
  ],
  cvBox: "Tam CV'de tüm pozisyonlar, beceriler ve sertifikalar var. Bir kopya için bana yazabilir ya da özetine LinkedIn'den bakabilirsin.",
  cvCta: "LinkedIn'de gör",
  nowStamp: "Ekim 2026'da güncellendi",
  now: [
    { h: 'Çalışıyorum', p: "Rohde & Schwarz'da güvenli bir yazılım tabanlı telsizin gereksinimleri üzerinde." },
    { h: 'Öğreniyorum', p: "Almanca, A2'den B1'e doğru." },
    { h: 'Yapıyorum', p: 'Bu siteyi: İngilizce, Türkçe ve yakında Almanca.' },
  ],
  contactH: 'Konuşalım',
  contactText: 'Bana ulaşmanın en hızlı yolu e-posta.',
  ui: {
    dark: 'Karanlık mod',
    light: 'Aydınlık mod',
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    deSoon: 'Almanca yakında',
    language: 'Dil',
    menu: 'Bölümler',
  },
};
