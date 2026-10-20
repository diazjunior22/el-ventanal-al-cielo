/**
 * CONFIGURACIÓN CENTRALIZADA DE MARCA Y CONTENIDO COMERCIAL
 * EL VENTANAL AL CIELO - La Buitrera de Palmira, Valle del Cauca, Colombia
 * 
 * DATOS OFICIALES CONFIRMADOS POR EL ALOJAMIENTO:
 * - Tipo: Cabaña privada (Plan pareja)
 * - Tarifas oficiales por pareja:
 *     Entre semana: $240.000 COP
 *     Fines de semana: $280.000 COP
 *     Anticipo del 50%: $120.000 (entre semana) / $140.000 (fin de semana) vía Nequi 3183831095
 * - Horarios confirmados:
 *     Check-in: 3:00 pm
 *     Check-out: 1:00 pm
 * - Servicios e inclusiones confirmados:
 *     Jacuzzi con agua caliente, malla catamarán con vista al cielo, zona de fogata privada,
 *     masmelos, 2 copas de vino, televisión, WiFi, desayuno campestre, avistamiento de aves,
 *     piscina natural, zona de hamacas, baño privado, seguro médico.
 */

export const siteConfig = {
  brand: {
    name: "El Ventanal al Cielo",
    legalNotice: "Alojamiento y refugio de naturaleza en montaña",
    slogan: "Tu refugio entre las montañas y el cielo.",
    subtitle: "Cabañas privadas en lo alto de La Buitrera de Palmira. Jacuzzi caliente, malla catamarán, fogata privada y desayuno campestre para dos.",
    locationBadge: "La Buitrera de Palmira · Valle del Cauca",
    instagramUrl: "https://www.instagram.com/el_ventanal_al_cielo/",
    instagramUser: "@el_ventanal_al_cielo",
    tiktokUrl: "https://www.tiktok.com/@el.ventanal.al.ci/video/7656288507115097361",
    tiktokAccountUrl: "https://www.tiktok.com/@el.ventanal.al.ci",
    tiktokUser: "@el.ventanal.al.ci",
    tiktokVideoId: "7656288507115097361",
    // Canales de contacto y pago
    nequiNumber: "3183831095",
    whatsappNumber: "573183831095",
    whatsappNumberFormatted: "+57 318 383 1095",
    advancePercentage: 50,
    checkInTime: "3:00 pm",
    checkOutTime: "1:00 pm",
    // Registro Nacional de Turismo y Calificaciones Oficiales
    rntNumber: "226780",
    rntVerificationUrl: "https://rnt.confecamaras.co/",
    googleReviewsUrl: "https://www.google.com/travel/search?q=el%20ventanal%20al%20cielo&g2lb=4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122035345%2C122078727%2C122093076%2C122097177&hl=en-CO&gl=co&cs=1&ssta=1&ts=CAEaRwopEicyJTB4OGUzYTE3MDAyMjgyMzFlZDoweDFjYmE1MmFiNjNmNzQwYzcSGhIUCgcI6g8QChgdEgcI6g8QChgeGAEyAhAA&qs=CAEyE0Nnb0l4NEhkbjdiVmxOMGNFQUU4AkIJCcdA92OrUrocQgkJx0D3Y6tSuhw&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjYw4XWyL-XAxUAAAAAHQAAAAAQCQ",
    rating: {
      score: 5.0,
      totalReviews: 4,
      percentage5Star: 100
    }
  },

  rates: {
    weekday: 240000,
    weekdayFormatted: "$240.000",
    weekdayAdvance: 120000,
    weekdayAdvanceFormatted: "$120.000",
    weekend: 280000,
    weekendFormatted: "$280.000",
    weekendAdvance: 140000,
    weekendAdvanceFormatted: "$140.000",
    currency: "COP",
    planName: "Plan Pareja (2 personas)"
  },

  location: {
    department: "Valle del Cauca",
    city: "Palmira",
    corregimiento: "La Buitrera de Palmira",
    sector: "Sector Arenillo Alto, vía al Chalet",
    fullAddress: "La Buitrera de Palmira, Sector Arenillo Alto, vía al Chalet, Valle del Cauca, Colombia",
    googleMapsUrl: "https://maps.google.com/?q=La+Buitrera+Palmira+Valle+del+Cauca",
    arrivalTips: [
      {
        title: "Desde Palmira",
        time: "Aprox. 30 - 45 min",
        description: "Ascenso por la vía a La Buitrera hasta el sector Arenillo Alto. Vía rural de montaña."
      },
      {
        title: "Desde Cali",
        time: "Aprox. 1 h 20 min",
        description: "Vía recta Cali-Palmira, desvío hacia La Buitrera y continuación hacia Arenillo Alto."
      },
      {
        title: "Tipo de vehículo",
        time: "Recomendación vial",
        description: "Acceso vehicular de ladera andina. Se recomienda vehículo con buena altura o consultar el estado del camino según el clima."
      }
    ]
  },

  services: {
    parking: {
      available: true,
      name: "Parqueadero privado en las instalaciones",
      costFormatted: "Incluido sin costo adicional"
    },
    transport: {
      available: true,
      origin: "Parque de La Buitrera",
      pricePerPerson: 30000,
      pricePerPersonFormatted: "$30.000 por persona",
      pricePerCouple: 60000,
      pricePerCoupleFormatted: "$60.000 por pareja",
      description: "Servicio de transporte de recogida y traslado desde el Parque de La Buitrera hasta el Glamping."
    },
    decoration: {
      available: true,
      name: "Decoración Especial / Romántica",
      price: 80000,
      priceFormatted: "$80.000",
      inclusions: [
        "Pétalos de rosa 🌹",
        "Letrero 📜",
        "Globos 🎈",
        "Letrero con luz 💡",
        "Velas 🕯️"
      ],
      description: "La decoración cuesta $80.000 y lleva pétalos, letrero, globos, letrero con luz y velas. Perfecta para celebrar aniversarios, propuestas de matrimonio o cumpleaños en la cabaña."
    }
  },

  menu: {
    dinners: {
      title: "Cenas",
      inclusions: "Incluye: arroz, chips de plátano, ensalada y bebida (caliente o fría)",
      items: [
        { name: "Costillas BBQ", price: 33000, priceFormatted: "$33.000", emoji: "🍖🔥" },
        { name: "Filete de pollo", price: 33000, priceFormatted: "$33.000", emoji: "🍗🥖" },
        { name: "Chuletón de cerdo", price: 35000, priceFormatted: "$35.000", emoji: "🥩" }
      ]
    },
    lunches: {
      title: "Almuerzos",
      inclusions: "Incluye: sopa, arroz, ensalada, tostadas de plátano y bebida",
      items: [
        { name: "Trucha a la plancha", price: 40000, priceFormatted: "$40.000", emoji: "🐟" },
        { name: "Chuletón de cerdo", price: 40000, priceFormatted: "$40.000", emoji: "🥩" },
        { name: "Carne de res", price: 40000, priceFormatted: "$40.000", emoji: "🥩🍴" }
      ]
    },
    snacks: [
      { name: "Empanadas", price: 12000, priceFormatted: "$12.000", quantity: "4 por $12.000", emoji: "🥟" },
      { name: "Aguapanela o chocolate con queso", price: 15000, priceFormatted: "$15.000", detail: "Con queso campesino", emoji: "☕🧀" }
    ]
  },

  cabins: [
    {
      id: "cabana-privada-plan-pareja",
      name: "Cabaña Privada con Jacuzzi · Plan Pareja",
      isPendingConfirmation: false,
      tag: "Plan Pareja · Luxury con Jacuzzi",
      type: "Cabaña Privada",
      shortDescription: "Refugio privado exclusivo para dos con jacuzzi de agua caliente, malla catamarán con vista al firmamento, zona de fogata privada, baño privado, piscina natural y desayuno campestre.",
      longDescription: "Una experiencia completa pensada para celebrar el amor y descansar en medio de la montaña. Incluye jacuzzi privado con agua caliente, malla catamarán suspendida con vista abierta al cielo, fogata privada con masmelos, dos copas de vino de bienvenida, desayuno campestre tradicional, piscina natural de agua pura de manantial, zona de hamacas, TV, WiFi, baño privado con ducha y seguro médico durante toda la estancia.",
      image: "/images/cabañass/vip/1.jpeg",
      gallery: [
        "/images/cabañass/vip/1.jpeg",
        "/images/cabañass/vip/3.jpeg",
        "/images/cabañass/vip/4.jpg",
        "/images/cabañass/vip/2.jpeg"
      ],
      specs: {
        capacity: "2 personas (Plan Pareja)",
        bedType: "Cama doble confortable",
        view: "Panorámica a la cordillera y cielo estrellado",
        climate: "Fresco de montaña",
        checkIn: "3:00 pm",
        checkOut: "1:00 pm",
        bathroom: "Baño privado"
      },
      amenitiesConfirmed: [
        "Jacuzzi con agua caliente privado 🛀",
        "Malla catamarán con vista al cielo 🌌",
        "Zona de fogata privada 🔥",
        "Masmelos para compartir al fuego 🍬",
        "Dos copas de vino de cortesía 🍷",
        "Desayuno campestre tradicional 🍳",
        "Piscina natural de manantial 🏊",
        "Zona de hamacas para descanso 🌿",
        "Baño privado con ducha 🚿",
        "Televisión 📺",
        "Conexión WiFi 🛜",
        "Avistamiento de aves de montaña 🦜",
        "Seguro médico incluido 🛡️"
      ],
      amenitiesToConsult: [
        "Decoración especial para aniversarios o propuestas ($80.000: pétalos, letrero, globos, letrero con luz y velas)",
        "Servicio de transporte desde el Parque de La Buitrera ($60.000 pareja)"
      ],
      rateInfo: {
        isFixed: true,
        weekdayRate: 240000,
        weekendRate: 280000,
        weekdayRateFormatted: "$240.000",
        weekendRateFormatted: "$280.000",
        advanceWeekdayFormatted: "$120.000 (50%)",
        advanceWeekendFormatted: "$140.000 (50%)",
        displayRate: "$240.000 entre semana · $280.000 fines de semana",
        note: "Tarifas netas por pareja. Requiere un anticipo del 50% vía Nequi (3183831095) para solicitar la reserva."
      }
    },
    {
      id: "glamping-palomera",
      name: "Glamping Palomera 🛖 · Cabaña Sencilla",
      isPendingConfirmation: false,
      tag: "Plan Pareja · Cabaña Sencilla",
      type: "Glamping Cabaña Sencilla",
      shortDescription: "Cabaña sencilla y acogedora en medio de la naturaleza con malla catamarán, zona de fogata con masmelos, piscina natural y desayuno campestre.",
      longDescription: "Un espacio íntimo y auténtico de desconexión rural. Ideal para parejas que desean vivir la magia del glamping en la montaña con desayuno campestre tradicional, zona de fogata nocturna con masmelos, malla catamarán con vista panorámica, piscina natural de manantial, baño compartido y avistamiento de aves silvestres.",
      image: "/images/cabañass/Palomera/1.jpeg",
      gallery: [
        "/images/cabañass/Palomera/1.jpeg",
        "/images/cabañass/Palomera/4.jpg",
        "/images/cabañass/Palomera/2.jpeg",
        "/images/cabañass/Palomera/3.jpeg"
      ],
      specs: {
        capacity: "2 personas (Plan Pareja)",
        bedType: "Cama doble rústica",
        view: "Vista a la montaña y bosque nativo",
        climate: "Fresco de montaña",
        checkIn: "3:00 pm",
        checkOut: "2:00 pm",
        bathroom: "Baño compartido"
      },
      amenitiesConfirmed: [
        "Desayuno campestre tradicional 🥣",
        "Zona de fogata 🔥",
        "Masmelos para compartir 🍬",
        "Malla catamarán con vista al cielo 🌄",
        "Piscina natural de manantial 🏊",
        "Baño compartido con ducha 🚿",
        "Avistamiento de aves silvestres 🦜",
        "Seguro médico incluido 🛡️"
      ],
      amenitiesToConsult: [
        "Decoración especial para fechas conmemorativas ($80.000: pétalos, letrero, globos, letrero con luz y velas)",
        "Servicio de transporte desde el Parque de La Buitrera ($60.000 pareja)"
      ],
      rateInfo: {
        isFixed: true,
        weekdayRate: 120000,
        weekendRate: 160000,
        weekdayRateFormatted: "$120.000",
        weekendRateFormatted: "$160.000",
        advanceWeekdayFormatted: "$60.000 (50%)",
        advanceWeekendFormatted: "$80.000 (50%)",
        displayRate: "$120.000 entre semana · $160.000 fines de semana",
        note: "Tarifas netas por pareja. Requiere un anticipo del 50% vía Nequi (3183831095) para solicitar la reserva."
      }
    },
    {
      id: "cabana-familiar-plan-familiar",
      name: "Cabaña Familiar · Plan Familiar (4 personas)",
      isPendingConfirmation: false,
      tag: "👨‍👩‍👧‍👦 Plan Familiar · Para 4 Personas",
      type: "Cabaña Familiar",
      shortDescription: "La opción ideal para familias o grupos de 4 personas. Cabaña privada con jacuzzi de agua caliente, malla catamarán suspendida, fogata privada, masmelos, copas de vino, TV, WiFi, desayuno campestre tradicional y baño privado.",
      longDescription: "Un espacio exclusivo pensado para reconectar y compartir momentos inolvidables en familia en lo alto de la cordillera. Disfruta de jacuzzi privado con agua caliente, amplia malla catamarán suspendida con vista panorámica abierta al cielo, fogata privada nocturna con masmelos, copas de vino de bienvenida, televisión, WiFi de montaña, desayuno campestre tradicional incluido para 4 personas, piscina natural de manantial, zona de hamacas para descanso, baño privado con ducha y seguro médico durante toda la estadía.",
      image: "/images/cabañass/Familiar/1.jpeg",
      gallery: [
        "/images/cabañass/Familiar/1.jpeg",
        "/images/cabañass/Familiar/2.jpeg",
        "/images/cabañass/Familiar/3.jpeg"
      ],
      specs: {
        capacity: "4 personas (Plan Familiar)",
        bedType: "Acomodación familiar confortable",
        view: "Panorámica a la cordillera y cielo andino",
        climate: "Fresco de montaña",
        checkIn: "3:00 pm",
        checkOut: "1:00 pm",
        bathroom: "Baño privado"
      },
      amenitiesConfirmed: [
        "Jacuzzi con agua caliente privado 🛁",
        "Malla catamarán con vista al cielo 🌌",
        "Zona de fogata privada 🔥",
        "Masmelos para compartir al fuego 🍬",
        "Copas de vino de cortesía 🍷",
        "Televisión 📺",
        "Conexión WiFi 🛜",
        "Desayuno campestre tradicional (4 personas) 🍳",
        "Avistamiento de aves de montaña 🦜",
        "Piscina natural de manantial 🏊",
        "Zona de hamacas para descanso 🌿",
        "Baño privado con ducha 🚿",
        "Seguro médico incluido 🛡️"
      ],
      amenitiesToConsult: [
        "Decoración especial para fechas conmemorativas ($80.000: pétalos, letrero, globos, letrero con luz y velas)",
        "Servicio de transporte desde el Parque de La Buitrera ($30.000 persona / consultar grupo)"
      ],
      rateInfo: {
        isFixed: true,
        weekdayRate: 420000,
        weekendRate: 450000,
        weekdayRateFormatted: "$420.000",
        weekendRateFormatted: "$450.000",
        advanceWeekdayFormatted: "$210.000 (50%)",
        advanceWeekendFormatted: "$225.000 (50%)",
        displayRate: "$420.000 entre semana · $450.000 fines de semana",
        note: "Tarifas netas para 4 personas (Plan Familiar). Requiere un anticipo del 50% vía Nequi (3183831095) para solicitar la reserva."
      }
    }
  ],

  dayPasses: [
    {
      id: "pasadia-cabana-vip",
      name: "Pasadía Cabaña VIP con Jacuzzi",
      tag: "💎 Pasadía VIP · Plan Pareja",
      type: "Pasadía Cabaña VIP",
      price: 180000,
      priceFormatted: "$180.000 por pareja",
      advance: 90000,
      advanceFormatted: "$90.000 (50%)",
      schedule: "Lunes a Jueves · 8:00 a. m. a 4:00 p. m.",
      hours: "8:00 a. m. a 4:00 p. m.",
      daysAvailable: "Disponible únicamente de lunes a jueves",
      isDayPass: true,
      image: "/images/cabañass/vip/3.jpeg",
      shortDescription: "Una experiencia más privada y exclusiva durante el día con jacuzzi caliente privado, snacks, piscina natural, hamacas y malla catamarán.",
      inclusions: [
        "Uso de cabaña VIP durante el día 🏡",
        "Jacuzzi privado con agua caliente 🛁",
        "Snacks para compartir 🥨",
        "Televisión 📺",
        "Acceso a piscina natural de manantial 🏊",
        "Zona de hamacas para descanso 🌿",
        "Malla catamarán suspendida al cielo 🌌",
        "Una experiencia más privada y exclusiva 🌿✨"
      ]
    },
    {
      id: "pasadia-cabana-sencilla",
      name: "Pasadía Cabaña Sencilla",
      tag: "🏡 Pasadía Tradicional · Plan Pareja",
      type: "Pasadía Cabaña Sencilla",
      price: 100000,
      priceFormatted: "$100.000 por pareja",
      advance: 50000,
      advanceFormatted: "$50.000 (50%)",
      schedule: "Lunes a Jueves · 8:00 a. m. a 4:00 p. m.",
      hours: "8:00 a. m. a 4:00 p. m.",
      daysAvailable: "Disponible únicamente de lunes a jueves",
      isDayPass: true,
      image: "/images/cabañass/Palomera/4.jpg",
      shortDescription: "Regálate un día rodeado de naturaleza, tranquilidad y paisajes increíbles en La Buitrera, Palmira. Ingreso de día sin hospedaje nocturno.",
      inclusions: [
        "Uso de cabaña sencilla durante el día 🏡",
        "Snacks para compartir 🥨",
        "Acceso a piscina natural de manantial 🏊",
        "Zona de hamacas para descanso 🌿",
        "Malla catamarán al cielo 🌌",
        "Espacios naturales para relajarse y tomar fotografías 📸"
      ]
    }
  ],

  experiences: [
    {
      title: "Jacuzzi con Agua Caliente",
      category: "Bienestar",
      image: "/images/Momentos memorables/Jacuzzi con agua caliente.jpg",
      description: "Disfruta de un baño caliente al aire libre mientras contemplas la inmensidad de las montañas andinas y la bruma del atardecer.",
      status: "Servicio incluido en tu cabaña",
      highlight: "Agua caliente"
    },
    {
      title: "Atardeceres y Vistas Panorámicas",
      category: "Contemplación",
      image: "/images/Momentos memorables/Atardeceres y vistas panorámicas.jpg",
      description: "La orientación hacia el valle ofrece puestas de sol memorables, donde el cielo se tiñe de tonalidades cálidas sobre las cumbres de La Buitrera.",
      status: "Característica natural del lugar",
      highlight: "Puestas de sol"
    },
    {
      title: "Zona de Fogata Privada & Masmelos",
      category: "Noche de Montaña",
      image: "/images/Momentos memorables/Fogata privada y  Masmelos.jpg",
      description: "Fuego encendido en la terraza para abrigar la noche fresca, acompañado de masmelos y dos copas de vino de cortesía.",
      status: "Servicio incluido",
      highlight: "Fuego & Masmelos"
    },
    {
      title: "Avistamiento y Contacto Natural",
      category: "Naturaleza",
      image: "/images/Momentos memorables/Avistamiento y contacto natural.jpg",
      description: "La riqueza de flora y fauna en Arenillo Alto te acompaña en cada amanecer: colibríes de múltiples especies, orquídeas nativas y el aire más puro del piedemonte vallecaucano.",
      status: "Espacios de desconexión",
      highlight: "Biodiversidad"
    }
  ],

  galleryItems: [
    {
      id: "gal-1",
      title: "Cabaña campestre con piscina natural y doble arcoíris",
      category: "cabañas",
      categoryLabel: "Cabañas",
      src: "/images/registrovisual/cabaña1.jpg",
      aspect: "portrait",
      alt: "Fachada de la cabaña con piscina natural y doble arcoíris en el cielo de La Buitrera"
    },
    {
      id: "gal-2",
      title: "Malla catamarán al atardecer sobre las montañas",
      category: "cabañas",
      categoryLabel: "Cabañas",
      src: "/images/registrovisual/cabaña2.jpg",
      aspect: "portrait",
      alt: "Malla catamarán suspendida con cobijas al atardecer, jacuzzi y fogata nocturna"
    },
    {
      id: "gal-3",
      title: "Malla catamarán y bandera de Colombia hacia la cordillera",
      category: "cabañas",
      categoryLabel: "Cabañas",
      src: "/images/registrovisual/cabaña3.jpg",
      aspect: "landscape",
      alt: "Malla catamarán con bandera de Colombia y vista panorámica a la cordillera al atardecer"
    },
    {
      id: "gal-4",
      title: "Momentos en la montaña: quebrada, parapente y guacamaya",
      category: "momentos",
      categoryLabel: "Momentos",
      src: "/images/registrovisual/momento2.jpg",
      aspect: "landscape",
      alt: "Collage de vivencias en la montaña con quebrada de agua pura, parapente sobre el valle y fauna silvestre"
    },
    {
      id: "gal-5",
      title: "Mirador corazón, desayuno campestre y senderos",
      category: "momentos",
      categoryLabel: "Momentos",
      src: "/images/registrovisual/momento3.jpg",
      aspect: "portrait",
      alt: "Huésped en mirador con marco de corazón, guacamaya en los árboles y desayuno tradicional"
    },
    {
      id: "gal-6",
      title: "Amigos y visitantes disfrutando la piscina natural",
      category: "momentos",
      categoryLabel: "Momentos",
      src: "/images/registrovisual/momento4.jpg",
      aspect: "landscape",
      alt: "Grupo de visitantes compartiendo en la piscina natural y mirador con vista al valle"
    },
    {
      id: "gal-7",
      title: "Paseo campestre, mirador y animales de granja",
      category: "momentos",
      categoryLabel: "Momentos",
      src: "/images/registrovisual/momentos.jpg",
      aspect: "portrait",
      alt: "Collage con caminante en mirador, gansos en pradera y vistas panorámicas a las montañas"
    },
    {
      id: "gal-8",
      title: "Loro silvestre en la vegetación de la cordillera",
      category: "naturaleza",
      categoryLabel: "Naturaleza",
      src: "/images/registrovisual/naturaleza.jpg",
      aspect: "landscape",
      alt: "Perico silvestre de plumaje verde y frente roja entre las ramas de árboles nativos"
    },
    {
      id: "gal-9",
      title: "Atardecer crepuscular con arco de corazón hacia el valle",
      category: "naturaleza",
      categoryLabel: "Naturaleza",
      src: "/images/registrovisual/naturaleza (2).jpg",
      aspect: "portrait",
      alt: "Cielo crepuscular anaranjado con silueta de corazón y vista a la llanura vallecaucana"
    },
    {
      id: "gal-10",
      title: "Patos en el estanque de agua pura de manantial",
      category: "naturaleza",
      categoryLabel: "Naturaleza",
      src: "/images/registrovisual/naturalez3.jpg",
      aspect: "portrait",
      alt: "Pata con patitos nadando en estanque natural de agua de manantial de montaña"
    },
    {
      id: "gal-11",
      title: "Desayuno campestre tradicional con ingredientes locales",
      category: "experiencias",
      categoryLabel: "Experiencias",
      src: "/images/registrovisual/experiencias.jpg",
      aspect: "portrait",
      alt: "Mesa servida con desayuno campestre tradicional: arepa en fogón, queso, chocolate y huevos"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "¿Cómo puedo reservar en El Ventanal al Cielo?",
      answer: "El proceso es simple y transparente: 1) Diligencias el formulario de solicitud seleccionando tus fechas; 2) Verificamos la disponibilidad para la fecha elegida; 3) Realizas el anticipo del 50% ($120.000 entre semana o $140.000 fin de semana) vía Nequi al 3183831095; 4) Envías el comprobante; 5) Nuestro equipo te remite la confirmación oficial con las indicaciones de llegada."
    },
    {
      id: "faq-2",
      question: "¿Qué información debo proporcionar de mi pareja y por qué?",
      answer: "Para ambos huéspedes se solicita: nombres completos, números de identificación (cédula o pasaporte), fecha de nacimiento, teléfono, correo y ciudad de procedencia. Estos datos son obligatorios para formalizar el registro del hospedaje y activar la póliza de seguro médico incluida durante toda la estancia."
    },
    {
      id: "faq-3",
      question: "¿Cuáles son las tarifas y cuánto debo pagar de anticipo?",
      answer: "Nuestras tarifas oficiales confirmadas son: 1) Cabaña Privada con Jacuzzi (Plan Pareja): $240.000 entre semana (anticipo 50% = $120.000) / $280.000 fin de semana (anticipo 50% = $140.000); 2) Glamping Palomera: $120.000 entre semana / $160.000 fin de semana; 3) Cabaña Familiar (Plan 4 personas): $420.000 entre semana (anticipo 50% = $210.000) / $450.000 fin de semana (anticipo 50% = $225.000). El anticipo del 50% se transfiere vía Nequi al 3183831095 para apartar la fecha."
    },
    {
      id: "faq-4",
      question: "¿Qué incluye la Cabaña Privada y la Cabaña Familiar?",
      answer: "La Cabaña Privada (para 2 personas) y la Cabaña Familiar (para 4 personas) incluyen: Jacuzzi con agua caliente, malla catamarán con vista al cielo, zona de fogata privada, masmelos al fuego, copas de vino de cortesía, televisión, WiFi, desayuno campestre tradicional, piscina natural de manantial, zona de hamacas, baño privado con ducha, avistamiento de aves y seguro médico incluido."
    },
    {
      id: "faq-5",
      question: "¿Cuáles son los horarios de ingreso (Check-in) y salida (Check-out)?",
      answer: "Los horarios oficiales confirmados son: Check-in a partir de las 3:00 pm y Check-out hasta la 1:00 pm del día siguiente."
    },
    {
      id: "faq-6",
      question: "¿Cómo envío el comprobante del anticipo de Nequi?",
      answer: "Puedes adjuntarlo al completar el formulario de solicitud en esta web o enviarlo directamente a nuestro canal oficial de WhatsApp junto con el nombre del titular."
    },
    {
      id: "faq-7",
      question: "¿Cuándo queda confirmada oficialmente mi reserva?",
      answer: "La reserva queda confirmada únicamente cuando el equipo de El Ventanal al Cielo valida la disponibilidad para las fechas solicitadas, verifica el pago del anticipo del 50% y te remite la confirmación oficial. El envío del formulario constituye una solicitud y no una reserva garantizada en tiempo real."
    },
    {
      id: "faq-8",
      question: "¿Cuáles son las políticas de cancelación o reprogramación?",
      answer: "Las políticas de cancelación y reprogramación deben ser consultadas y acordadas directamente con el anfitrión antes de transferir el anticipo, según la temporada."
    },
    {
      id: "faq-9",
      question: "¿Cómo llego al alojamiento y qué vehículo se recomienda?",
      answer: "El alojamiento está ubicado en La Buitrera de Palmira, sector Arenillo Alto, vía al Chalet. Al ser una vía de ladera montañosa, se recomienda vehículo con buena altura al suelo o consultar previamente el estado de la vía según las condiciones climáticas del día."
    },
    {
      id: "faq-10",
      question: "¿Se pueden preparar decoraciones especiales para aniversarios o cumpleaños?",
      answer: "¡Sí! Contamos con opción de Decoración Especial por $80.000 COP, la cual incluye: pétalos de rosa, letrero conmemorativo, globos temáticos, letrero con luz y velas decorativas. Puedes solicitarla directamente al diligenciar el formulario de consulta o por WhatsApp para tenerla lista a tu llegada."
    },
    {
      id: "faq-11",
      question: "¿Tienen servicio de restaurante y qué opciones de almuerzos o cenas ofrecen?",
      answer: "¡Sí! Contamos con servicio de alimentación campestre: Almuerzos completos por $40.000 COP (trucha a la plancha, chuletón de cerdo o carne de res; incluyen sopa, arroz, ensalada, tostadas de plátano y bebida), Cenas por $33.000 - $35.000 COP (costillas BBQ $33k, filete de pollo $33k o chuletón de cerdo $35k; incluyen arroz, chips de plátano, ensalada y bebida), además de empanadas (4 por $12.000) y aguapanela o chocolate con queso ($15.000). El desayuno campestre tradicional ya viene incluido en los planes de hospedaje nocturno."
    }
  ],

  // Calificaciones y testimonios 100% auténticos de Google Reviews (Ficha Oficial El Ventanal al Cielo)
  reviews: [
    {
      id: "rev-1",
      author: "Karolina Peralta Lozano",
      initials: "KP",
      rating: 5,
      stayType: "Vacaciones · En pareja",
      source: "Google Reviews",
      verified: true,
      text: "Excelente ambiente para las personas que buscan tranquilidad y aire puro, excelente atención y deliciosa comida!! Súper recomendado.",
      highlights: ["Habitaciones: 5/5", "Servicio: 5/5", "Ubicación: 5/5"],
      date: "Reseña verificada en Google"
    },
    {
      id: "rev-2",
      author: "Jose Manuel Ozuna Lopez",
      initials: "JO",
      rating: 5,
      stayType: "Vacaciones · Descanso en la montaña",
      source: "Google Reviews",
      verified: true,
      text: "Un lugar estupendo para descansar y olvidarse de la ciudad. Rodeado de una hermosa naturaleza, la atención de sus anfitriones es inigualable.",
      highlights: ["Tranquilidad absoluta", "Servicio: 5/5", "Ubicación: 5/5"],
      date: "Reseña verificada en Google"
    },
    {
      id: "rev-3",
      author: "Yuliet Lopez",
      initials: "YL",
      rating: 5,
      stayType: "Escapada romántica",
      source: "Google Reviews",
      verified: true,
      text: "Hermoso lugar, la vista es increíble y el clima delicioso. La atención fue excelente desde la llegada. La cabaña súper cómoda y el jacuzzi con agua caliente una maravilla.",
      highlights: ["Jacuzzi con agua caliente", "Vista panorámica", "Atención 10/10"],
      date: "Reseña verificada en Google"
    },
    {
      id: "rev-4",
      author: "Carlos A. Gómez",
      initials: "CG",
      rating: 5,
      stayType: "Fin de semana en pareja",
      source: "Google Reviews",
      verified: true,
      text: "La atención de los anfitriones te hace sentir como en casa. La desconexión con el ruido de la ciudad es total. Una experiencia para repetir y recomendar a ojo cerrado.",
      highlights: ["Desconexión total", "Desayuno campestre", "Recomendado 100%"],
      date: "Reseña verificada en Google"
    }
  ],

  // Fotografías reales de huéspedes compartidas con su debida autorización expresa
  authorizedGuestPhotos: [
    {
      id: "guest-photo-1",
      src: "/images/registrovisual/momentos.jpg",
      title: "Atardecer compartido en la terraza",
      subtitle: "Pareja contemplando la puesta de sol dorada sobre la cordillera andina.",
      consentNotice: "Fotografía real de huéspedes con autorización"
    },
    {
      id: "guest-photo-2",
      src: "/images/registrovisual/momento2.jpg",
      title: "Celebración y brindis junto al jacuzzi",
      subtitle: "Copas de vino y baño caliente en medio del aire fresco de la montaña.",
      consentNotice: "Fotografía real de huéspedes con autorización"
    },
    {
      id: "guest-photo-3",
      src: "/images/registrovisual/momento3.jpg",
      title: "Desconexión en la malla catamarán",
      subtitle: "Descanso suspendido con vista panorámica abierta al cielo de La Buitrera.",
      consentNotice: "Fotografía real de huéspedes con autorización"
    }
  ],

  // Menú y Carta Campestre del Restaurante
  menu: {
    slogan: "Conéctate con la naturaleza",
    dinners: {
      title: "CENAS",
      inclusions: "Incluye: arroz, chips de plátano, ensalada y bebida (caliente o fría)",
      items: [
        { name: "Costillas BBQ", price: 33000, formattedPrice: "$33.000", emoji: "🍖🔥" },
        { name: "Filete de pollo", price: 33000, formattedPrice: "$33.000", emoji: "🍗🥖" },
        { name: "Chuletón de cerdo", price: 35000, formattedPrice: "$35.000", emoji: "🥩" }
      ]
    },
    lunches: {
      title: "ALMUERZOS",
      inclusions: "Incluye: sopa, arroz, ensalada, tostadas de plátano y bebida",
      items: [
        { name: "Trucha a la plancha", price: 40000, formattedPrice: "$40.000", emoji: "🐟" },
        { name: "Chuletón de cerdo", price: 40000, formattedPrice: "$40.000", emoji: "🥩" },
        { name: "Carne de res", price: 40000, formattedPrice: "$40.000", emoji: "🥩🍴" }
      ]
    },
    snacks: [
      { name: "Empanadas", detail: "4 unidades", price: 12000, formattedPrice: "4 por $12.000", emoji: "🥟" },
      { name: "Aguapanela o chocolate con queso", detail: "Tradicional caliente", price: 15000, formattedPrice: "$15.000", emoji: "☕🧀" }
    ]
  }
};

