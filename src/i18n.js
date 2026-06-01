import { reactive, computed } from 'vue'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      images: 'Images',
      videos: 'Videos',
      destinations: 'Destinations',
      north: 'Northern Province',
      south: 'Southern Province',
      east: 'Eastern Province',
      west: 'Western Province',
      kigali: 'Kigali City',
      contact: 'Contact',
      language: 'Language',
      english: 'EN',
      kinyarwanda: 'RW'
    },
    home: {
      pill: 'Explore Rwanda',
      heroHeading: 'Feel the beauty of Rwanda beyond the ordinary',
      heroText: 'From misty hills and wildlife-rich parks to vibrant city life and welcoming culture, Rwanda is a destination for adventure, relaxation, and inspiring stories.',
      destinationsButton: 'View Destinations',
      aboutButton: 'About Us',
      sectionTitle: 'Interactive experiences for every traveler',
      card1Title: 'Cultural Journeys',
      card1Text: 'Connect with local heritage through craft markets, storytelling tours, and community experiences that feel authentic and welcoming.',
      card2Title: 'Nature & Wildlife',
      card2Text: 'Discover dramatic landscapes, national parks, and rare wildlife with photo-friendly viewpoints and guided eco-adventures.',
      card3Title: 'Easy Planning',
      card3Text: 'Enjoy curated routes, flexible itineraries, and helpful tips so you can plan a seamless trip from Kigali to the countryside.',
      highlightTitle: 'Choose your next adventure',
      highlightText: 'Our home page now brings more context with direct routes and highlights so visitors can quickly discover what makes Rwanda unforgettable.',
      cardA: 'Kigali city life',
      cardAText: 'Modern culture, museums, and dining for a memorable urban stay.',
      cardB: 'National parks',
      cardBText: 'Wildlife safaris, gorilla treks, and lush scenery in the heart of nature.',
      cityTitle: 'City Experience',
      cityText: 'Explore lively streets, arts, and cuisine.',
      northTitle: 'Mountain Trails',
      northText: 'Hiking, lakes, and remote corners of Rwanda.'
    },
    about: {
      heroHeading: 'About Visit Rwanda',
      heroText: 'Discover the beauty, culture, wildlife, and adventure that make Rwanda one of Africa’s most remarkable destinations.',
      title: 'Who We Are',
      paragraph1: 'Visit Rwanda is a tourism platform dedicated to showcasing the beauty and uniqueness of Rwanda. From breathtaking landscapes to vibrant culture and incredible wildlife, Rwanda offers unforgettable experiences for visitors from around the world.',
      paragraph2: 'Our goal is to inspire travelers to explore Rwanda’s diverse destinations, including the City of Kigali, Volcanoes National Park, Nyungwe Forest, Akagera National Park, and the beautiful shores of Lake Kivu.',
      button: 'Explore Rwanda',
      stats: {
        provinces: 'Provinces',
        parks: 'National Parks',
        attractions: 'Tourist Attractions',
        visitors: 'Visitors'
      }
    },
    services: {
      heroHeading: 'Our Services',
      heroText: 'Explore Rwanda with confidence through our tourism services, travel guidance, and destination experiences.',
      gorillaTitle: 'Gorilla Trekking',
      gorillaText: 'Experience Rwanda’s famous mountain gorillas in Volcanoes National Park with guided tours and unforgettable adventures.',
      hotelTitle: 'Hotel Booking',
      hotelText: 'Find comfortable accommodations across Kigali and Rwanda’s beautiful tourist destinations.',
      transportTitle: 'Transport Services',
      transportText: 'Enjoy safe and convenient transportation for city tours, national parks, and provincial destinations.',
      tourTitle: 'Tour Packages',
      tourText: 'Discover carefully designed travel packages that showcase Rwanda’s landscapes, culture, and wildlife.',
      photoTitle: 'Photography Tours',
      photoText: 'Capture Rwanda’s breathtaking scenery, wildlife, and cultural experiences with professional guidance.',
      consultTitle: 'Travel Consultation',
      consultText: 'Get expert travel advice, destination recommendations, and planning assistance for your Rwanda adventure.',
      whyTitle: 'Why Choose Visit Rwanda?',
      whyCard1: 'Trusted Experience',
      whyCard1Text: 'Professional tourism guidance for visitors worldwide.',
      whyCard2: 'Natural Beauty',
      whyCard2Text: 'Access Rwanda’s most beautiful attractions and parks.',
      whyCard3: 'Friendly Support',
      whyCard3Text: 'Dedicated assistance before and during your trip.'
    },
    contact: {
      heroHeading: 'Contact Us',
      heroText: 'We’d love to hear from you. Reach out for travel information, partnerships, or general inquiries about Rwanda.',
      getInTouch: 'Get In Touch',
      address: '📍 Address',
      phone: '📞 Phone',
      email: '✉️ Email',
      hours: '🕒 Working Hours',
      addressText: 'Kigali, Rwanda',
      phoneText: '+250 788 123 456',
      emailText: 'info@visitrwanda.com',
      hoursText: 'Monday - Friday: 8:00 AM - 5:00 PM',
      sendMessage: 'Send a Message',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your Message',
      sendButton: 'Send Message',
      success: 'Thank you! Your message has been received.'
    },
    destination: {
      heroTitle: 'About Tembera Urwanda',
      heroText: 'Discover the beauty of Rwanda.',
      welcomeTitle: 'Welcome to Rwanda',
      welcomeText: 'Tembera Urwanda is a tourism website created to help both international tourists and Rwandans discover the beauty of Rwanda, the Land of a Thousand Hills.',
      welcomeText2: 'From the peaceful beaches of Lake Kivu and the wildlife of Akagera National Park to the vibrant city life of Kigali, Rwanda offers unforgettable experiences filled with adventure, culture, and natural beauty.',
      welcomeText3: 'Our mission is to inspire people to travel, explore Rwanda, and create lasting memories through amazing destinations and unique experiences.',
      button: 'Explore Rwanda',
      popularTitle: 'Popular Destinations',
      card1Title: 'Volcanoes National Park',
      card1Text: 'Experience mountain gorillas and breathtaking volcanic scenery.',
      card2Title: 'Lake Kivu',
      card2Text: 'Relax on peaceful beaches and enjoy stunning sunset views.',
      card3Title: 'Kigali City',
      card3Text: 'Explore Rwanda’s vibrant capital filled with culture and modern life.'
    },
    footer: {
      title: 'Tembera U RWANDA',
      description: 'Discover the beauty of the land of a thousand hills',
      quickLinks: 'Quick links',
      home: 'Home',
      about: 'About us',
      service: 'Service',
      contact: 'Contact us',
      destinations: 'Destination',
      contactUs: 'Contact us',
      copy: '© 2024 Tembera URWANDA. All rights reserved.'
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Ishusho',
      images: 'Amafoto',
      videos: 'Videwo',
      destinations: 'Ahantu',
      north: 'Amajyaruguru',
      south: 'Amajyepfo',
      east: 'Iburasirazuba',
      west: 'Uburengerazuba',
      kigali: 'Umujyi wa Kigali',
      contact: 'Tuvugishe',
      language: 'Ururimi',
      english: 'EN',
      kinyarwanda: 'RW'
    },
    home: {
      pill: 'Sura u Rwanda',
      heroHeading: 'Wumve ubwiza bw’u Rwanda burenze ibisanzwe',
      heroText: 'Uhereye ku misozi y’ibicu n’ubusitani bw’inyamaswa kugera ku buzima bw’umujyi n’umuco ukirwa neza, u Rwanda ni ahantu h’ubukerarugendo, kuruhuka, no gusabana.',
      destinationsButton: 'Reba Aho Wasura',
      aboutButton: 'Ibyerekeye',
      sectionTitle: 'Uburyo bwo guhura n’ubunararibonye ku mukerarugendo wese',
      card1Title: 'Ingendo z’umuco',
      card1Text: 'Hura n’umuco kavukire binyuze mu masoko y’imyambarire, inkuru z’abaturage, n’ibikorwa by’abantu.',
      card2Title: 'Kamere n’inyamaswa',
      card2Text: 'Sanga ibyiza nyaburanga, pariki z’igihugu, n’inyamaswa zidashira utabara n’abayobozi.',
      card3Title: 'Gutezura byoroshye',
      card3Text: 'Mwishimire ingendo zateguwe, gahunda zicagaguwe, n’inama zizatuma urugendo rwawe ruterana neza.',
      highlightTitle: 'Hitamo igitekerezo gikurikira',
      highlightText: 'Urupapuro rw’ahabanza rutanga amakuru y’ingenzi n’uburyo bwo kubona vuba ibyiza by’u Rwanda.',
      cardA: 'Ubugingo bw’umujyi wa Kigali',
      cardAText: 'Umuco, inyubako, n’amafunguro byatuma ugira ibihe bitazibagirana.',
      cardB: 'Pariki za Leta',
      cardBText: 'Inzira z’inyamaswa, urugendo rwo kureba ingagi, n’ibice by’imisozi biryoshye mu ishyamba.',
      cityTitle: 'Uburyo bw’Umujyi',
      cityText: 'Sura imihanda y’umujyi, ubuhanzi, n’ibiribwa.',
      northTitle: 'Inzira z’Imisozi',
      northText: 'Gusura imisozi, ibiyaga, n’ahandi hatandukanye mu Rwanda.'
    },
    about: {
      heroHeading: 'Ibyerekeye Visit Rwanda',
      heroText: 'Menya ubwiza, umuco, inyamaswa, n’ubukerarugendo bituma u Rwanda ruba kimwe mu bihugu by’akarere k’Afurika bitangaje.',
      title: 'Turi bande',
      paragraph1: 'Visit Rwanda ni urubuga rw’ubukerarugendo rwashinzwe kugira ngo rwerekane ubwiza n’ubudasa bw’u Rwanda. Uhereye ku misozi iseka kugeza ku muco ukangura n’inyamaswa zidashira, u Rwanda rutanga ubunararibonye butazibagirana ku basura baturutse impande zose z’isi.',
      paragraph2: 'Intego yacu ni ukugira abantu bashishikare gusura ahantu hatandukanye mu Rwanda, harimo Umujyi wa Kigali, Pariki ya Volcanoes, Icyanya cya Nyungwe, Pariki ya Akagera, n’ibirwa byiza bya Kivu.',
      button: 'Sura u Rwanda',
      stats: {
        provinces: 'Intara',
        parks: 'Pariki z’Igihugu',
        attractions: 'Aho basura',
        visitors: 'Abasuye'
      }
    },
    services: {
      heroHeading: 'Serivisi zacu',
      heroText: 'Sura u Rwanda wizeye serivisi zacu z’ubukerarugendo, ubujyanama mu ngendo, n’ubunararibonye bw’aho wasura.',
      gorillaTitle: 'Gusura ingagi',
      gorillaText: 'Menya ingagi ziba mu misozi ya Volcanoes National Park hamwe n’abayobozi b’inzira n’ubunararibonye budasanzwe.',
      hotelTitle: 'Gushaka amahoteli',
      hotelText: 'Shaka aho kwicara hizewe mu mujyi wa Kigali n’ahandi heza mu Rwanda.',
      transportTitle: 'Serivisi z’imodoka',
      transportText: 'Imenya uburyo bwo kuva mu mujyi uzenguruka pariki n’intara mu mutekano kandi byoroshye.',
      tourTitle: 'Porogaramu z’ingendo',
      tourText: 'Sanga porogaramu zateguwe neza zerekana imisozi, umuco, n’inyamaswa z’u Rwanda.',
      photoTitle: 'Ingendo zo gufata amafoto',
      photoText: 'Fata amafoto y’ibyiza by’u Rwanda, inyamaswa, n’umuco n’ubufasha bw’abahanga.',
      consultTitle: 'Inama z’ingendo',
      consultText: 'Fata inama ku ngendo, aho wasura, n’ibyagufasha muri gahunda yawe yo gusura u Rwanda.',
      whyTitle: 'Kuki wahitamo Visit Rwanda?',
      whyCard1: 'Uburambe bwizewe',
      whyCard1Text: 'Ubuyobozi bw’umwuga mu bukerarugendo ku basura baturutse impande zose z’isi.',
      whyCard2: 'Ubwiza kamere',
      whyCard2Text: 'Gerageza ahantu nyaburanga heza n’imishinga.',
      whyCard3: 'Ubufasha bushyira mu gaciro',
      whyCard3Text: 'Ubufasha buhamye mbere no mu gihe cy’urugendo rwawe.'
    },
    contact: {
      heroHeading: 'Tuvugishe',
      heroText: 'Twishimira kwakira ubutumwa bwawe. Twandikire kugira ngo uhabwe amakuru y’ingendo, ubufatanye, cyangwa ibindi bibazo kuri Rwanda.',
      getInTouch: 'Twandikire',
      address: '📍 Aderesi',
      phone: '📞 Telefoni',
      email: '✉️ Imeli',
      hours: '🕒 Amasaha akazi',
      addressText: 'Kigali, Rwanda',
      phoneText: '+250 788 123 456',
      emailText: 'info@visitrwanda.com',
      hoursText: 'Kuwa Mbere - Kuwa Gatanu: 8:00 AM - 5:00 PM',
      sendMessage: 'Ohereza Ubutumwa',
      namePlaceholder: 'Amazina yose',
      emailPlaceholder: 'Aderesi imeyili',
      subjectPlaceholder: 'Umutwe w’ubutumwa',
      messagePlaceholder: 'Ubutumwa bwawe',
      sendButton: 'Ohereza ubutumwa',
      success: 'Urakoze! Ubutumwa bwawe bwakiriwe.'
    },
    destination: {
      heroTitle: 'Ibyerekeye Tembera Urwanda',
      heroText: 'Menya ubwiza bw’u Rwanda.',
      welcomeTitle: 'Murakaza neza mu Rwanda',
      welcomeText: 'Tembera Urwanda ni urubuga rw’ubukerarugendo rwashyizweho kugirango rufashe abakerarugendo bo mu mahanga n’Abanyarwanda kumenya ubwiza bw’u Rwanda, Igihugu cy’imisozi igihumbi.',
      welcomeText2: 'Uhereye ku mucanga utuje wa Kivu n’inyamaswa za Pariki ya Akagera kugeza ku buzima bw’umujyi wa Kigali, u Rwanda rutanga ubunararibonye bwiza bwuzuyemo ubukerarugendo, umuco, n’ubwiza karemano.',
      welcomeText3: 'Intego yacu ni ugushyira abantu mu byishimo byo gusura, gusura u Rwanda, no gukora ibihe bidasanzwe binyuze mu hantu nyaburanga n’ubunararibonye budasanzwe.',
      button: 'Sura u Rwanda',
      popularTitle: 'Aho bakunze gusura',
      card1Title: 'Pariki ya Volcanoes',
      card1Text: 'Menya ingagi z’imisozi n’ibyiza bitangaje bya volkanike.',
      card2Title: 'Ikivu',
      card2Text: 'Ruhukira ku mucanga utuje kandi wishimire izuba rirenga.',
      card3Title: 'Umujyi wa Kigali',
      card3Text: 'Sura umujyi wuzuyemo umuco n’ubuzima bushya.'
    },
    footer: {
      title: 'Tembera U RWANDA',
      description: 'Menya ubwiza bw’igihugu cy’imisozi igihumbi',
      quickLinks: 'Aho ujya vuba',
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      service: 'Serivisi',
      contact: 'Tuvugishe',
      destinations: 'Ahantu',
      contactUs: 'Tuvugishe',
      copy: '© 2024 Tembera URWANDA. Uburenganzira bwose burabitswe.'
    }
  }
}

const state = reactive({
  locale: 'en'
})

function t(path) {
  const keys = path.split('.')
  let current = messages[state.locale]
  for (const key of keys) {
    if (!current || typeof current !== 'object') {
      return path
    }
    current = current[key]
  }
  return current ?? path
}

function setLocale(locale) {
  if (messages[locale]) {
    state.locale = locale
  }
}

function useI18n() {
  return {
    t,
    locale: computed(() => state.locale),
    setLocale,
    availableLocales: computed(() => Object.keys(messages))
  }
}

export { useI18n }
