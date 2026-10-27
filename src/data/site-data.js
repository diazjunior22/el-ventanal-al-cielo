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
    subtitle: "Glamping ecológico a 1.900 m s. n. m. en La Buitrera de Palmira. Cabañas privadas, agua 100% pura de nacedero propio, dos lagos de truchas arcoíris, alimentación orgánica de nuestra huerta y regeneración activa de bosque andino.",
    locationBadge: "Glamping Ecológico a 1.900 m s. n. m. · La Buitrera de Palmira",
    altitude: "1.900 m s. n. m.",
    altitudeNumber: 1900,
    altitudeDescription: "Situados a 1.900 metros sobre el nivel del mar en la cordillera andina de La Buitrera de Palmira.",
    // Compromisos y Pilares Ecológicos
    ecoGlamping: {
      isEco: true,
      tagline: "Glamping Ecológico & Reserva Natural",
      altitude: "1.900 m s. n. m.",
      pureWater: "Agua 100% limpia, viva y pura de nacedero natural propio de montaña sin químicos.",
      troutLakes: "Dos lagos ecológicos de agua viva con alevinos y truchas arcoíris.",
      organicFood: "Alimentación 100% orgánica cosechada en nuestra propia huerta, libre de agroquímicos y pesticidas.",
      pollinators: "Cuidado y protección activa de polinizadores: abejas nativas meliponas, colibríes y mariposas.",
      forestRegeneration: "Proceso activo de regeneración de bosque andino mediante la siembra continua de árboles nativos.",
      wildlifeMonitoring: {
        featuredSpecies: "Yaguarundí (Herpailurus yagouaroundi)",
        commonNames: "Yaguarundí, Gato Moro o León de Montaña Pequeño",
        captureMethod: "Cámara trampa con sensor térmico e infrarrojo no invasivo",
        authority: "CVC (Corporación Autónoma Regional del Valle del Cauca)",
        protectionStatus: "Especie silvestre protegida por la CVC y prioritaria en la biodiversidad del Valle del Cauca",
        altitude: "1.900 m s. n. m.",
        location: "La Buitrera de Palmira, Sector Arenillo Alto",
        image: "/images/registrovisual/LOBO.jpg",
        galleryId: "gal-15",
        captures: [
          {
            id: "gal-15",
            image: "/images/registrovisual/LOBO.jpg",
            telemetry: "23°C / 73°F · 03/12/2025 13:25:28",
            title: "Toma 1 · Guardia erguido en sendero",
            time: "13:25:28"
          },
          {
            id: "gal-15b",
            image: "/images/registrovisual/LOBO1.jpg",
            telemetry: "23°C / 73°F · 09/12/2025 11:55:45",
            title: "Toma 2 · Patrullaje diurno sobre roca",
            time: "11:55:45"
          }
        ],
        keyTakeaway: "La presencia documentada de este felino silvestre certifica que la reserva de El Ventanal al Cielo es un corredor biológico activo, saludable y protegido."
      }
    },
    instagramUrl: "https://www.instagram.com/el_ventanal_al_cielo/",
    instagramUser: "@el_ventanal_al_cielo",
    tiktokUrl: "https://www.tiktok.com/@el.ventanal.al.ci/video/7656288507115097361",
    tiktokAccountUrl: "https://www.tiktok.com/@el.ventanal.al.ci",
    tiktokUser: "@el.ventanal.al.ci",
    tiktokVideoId: "7656288507115097361",
    // Canales de contacto y pago
    nequiNumber: "3183831095",
    nequiLogo: "/images/nequi-logo.png",
    whatsappNumber: "573180556634",
    whatsappNumberFormatted: "+57 318 055 6634",
    officialBookingNumber: "3180556634",
    officialBookingNumberFormatted: "+57 318 055 6634",
    advancePercentage: 50,
    checkInTime: "3:00 pm",
    checkOutTime: "1:00 pm",
    // Registro Nacional de Turismo y Calificaciones Oficiales
    rntNumber: "226780",
    rntVerificationUrl: "https://rnt.confecamaras.co/",
    // Reconocimiento Oficial de Calidad Turística (Mayo 2026)
    qualityCertification: {
      title: "Prestador de Servicios Turísticos Reconocido por aplicar Buenas Prácticas",
      program: "Calidad Turística Colombia",
      date: "Mayo 2026",
      backing: "Ministerio de Comercio, Industria y Turismo · FONTUR · Gobernación del Valle del Cauca (Secretaría de Turismo)",
      image: "/images/certificado.jpg"
    },
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
      inventoryBadge: "💎 Solo 3 cabañas VIP en la reserva",
      type: "Cabaña Privada",
      shortDescription: "Refugio privado exclusivo para dos con jacuzzi de agua caliente, malla catamarán con vista al firmamento, zona de fogata privada, baño privado, piscina natural y desayuno campestre.",
      longDescription: "Una experiencia completa pensada para celebrar el amor y descansar en medio de la montaña. Incluye jacuzzi privado con agua caliente, malla catamarán suspendida con vista abierta al cielo, fogata privada con masmelos, dos copas de vino de bienvenida, desayuno campestre tradicional, piscina natural de agua pura de manantial, zona de hamacas, TV, WiFi, baño privado con ducha y seguro médico durante toda la estancia. Solo contamos con 3 unidades VIP en toda la reserva.",
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
        note: "Tarifas netas por pareja. Requiere un anticipo del 50% vía Nequi (3183831095) para solicitar la reserva. Cupo limitado a solo 3 cabañas VIP."
      }
    },
    {
      id: "glamping-palomera",
      name: "Glamping Palomera 🛖 · Cabaña Sencilla",
      isPendingConfirmation: false,
      tag: "Plan Pareja · Cabaña Sencilla",
      inventoryBadge: "🛖 Solo 2 unidades disponibles",
      type: "Glamping Cabaña Sencilla",
      shortDescription: "Cabaña sencilla y acogedora en medio de la naturaleza con malla catamarán, zona de fogata con masmelos, piscina natural y desayuno campestre.",
      longDescription: "Un espacio íntimo y auténtico de desconexión rural. Ideal para parejas que desean vivir la magia del glamping en la montaña con desayuno campestre tradicional, zona de fogata nocturna con masmelos, malla catamarán con vista panorámica, piscina natural de manantial, baño compartido y avistamiento de aves silvestres. Solo contamos con 2 unidades Palomera en el glamping.",
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
        note: "Tarifas netas por pareja. Requiere un anticipo del 50% vía Nequi (3183831095) para solicitar la reserva. Cupo limitado a solo 2 unidades."
      }
    },
    {
      id: "cabana-familiar-plan-familiar",
      name: "Cabaña Familiar · Plan Familiar (4 personas)",
      isPendingConfirmation: false,
      tag: "👨‍👩‍👧‍👦 Plan Familiar · Para 4 Personas",
      inventoryBadge: "✨ Modalidad en Cabaña VIP (cupo compartido)",
      type: "Cabaña Familiar",
      shortDescription: "La opción ideal para familias o grupos de 4 personas. Cabaña privada con jacuzzi de agua caliente, malla catamarán suspendida, fogata privada, masmelos, copas de vino, TV, WiFi, desayuno campestre tradicional y baño privado.",
      longDescription: "Un espacio exclusivo pensado para reconectar y compartir momentos inolvidables en familia en lo alto de la cordillera. Disfruta de jacuzzi privado con agua caliente, amplia malla catamarán suspendida con vista panorámica abierta al cielo, fogata privada nocturna con masmelos, copas de vino de bienvenida, televisión, WiFi de montaña, desayuno campestre tradicional incluido para 4 personas, piscina natural de manantial, zona de hamacas para descanso, baño privado con ducha y seguro médico durante toda la estadía. Nota: Esta opción se acondiciona sobre una de nuestras 3 Cabañas VIP y su disponibilidad está sujeta a que haya cabaña VIP disponible.",
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
      title: "Huerta 100% Orgánica & Polinizadores",
      category: "Sostenibilidad & Vida",
      image: "/images/Momentos memorables/Avistamiento y contacto natural.jpg",
      description: "Alimentación 100% limpia sin químicos ni pesticidas. Cultivamos nuestra propia huerta orgánica para ofrecer alimentos puros a nuestros huéspedes y proteger activamente a los polinizadores (abejas nativas meliponas, colibríes y mariposas).",
      status: "Huerta propia sin agroquímicos",
      highlight: "100% Orgánico"
    },
    {
      title: "Nacedero de Agua Pura & Lagos de Truchas",
      category: "Reserva Hídrica a 1.900 m s. n. m.",
      image: "/images/registrovisual/naturalez3.jpg",
      description: "Nuestra agua proviene directamente de un nacedero propio de montaña, 100% limpia, viva y cristalina. Abastece nuestras instalaciones y dos lagos naturales habitados por alevinos y truchas arcoíris.",
      status: "Agua limpia de nacedero",
      highlight: "2 Lagos de Truchas"
    },
    {
      title: "Regeneración de Bosque mediante Siembra de Árboles",
      category: "Conservación Activa",
      image: "/images/Filosofía de descanso/Naturaleza en estado puro.jpg",
      description: "Estamos en un proceso permanente de regeneración de bosque andino a través de la siembra continua de árboles nativos, recuperando la cobertura vegetal y protegiendo el ecosistema de niebla.",
      status: "Siembra activa de árboles",
      highlight: "Regeneración Forestal"
    },
    {
      title: "Jacuzzi con Agua Caliente & Vista al Cielo",
      category: "Bienestar en la Altura",
      image: "/images/Momentos memorables/Jacuzzi con agua caliente.jpg",
      description: "Disfruta de un baño caliente al aire libre mientras contemplas la inmensidad de las montañas andinas, los atardeceres dorados y el cielo estrellado a 1.900 metros de altura.",
      status: "Servicio insignia incluido",
      highlight: "Agua Caliente"
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
      title: "Fauna silvestre de montaña: quebrada y guacamaya",
      category: "fauna",
      categoryLabel: "Fauna & Animales",
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
      title: "Animales en pradera natural, mirador y senderos",
      category: "fauna",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/momentos.jpg",
      aspect: "portrait",
      alt: "Collage con caminante en mirador, gansos en pradera y vistas panorámicas a las montañas"
    },
    {
      id: "gal-8",
      title: "Loro silvestre en la vegetación de la cordillera",
      category: "fauna",
      categoryLabel: "Fauna & Animales",
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
      title: "Aves acuáticas en el estanque de agua pura de nacedero",
      category: "fauna",
      categoryLabel: "Fauna & Animales",
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
    },
    {
      id: "gal-12",
      title: "Copetón andino anidando en la reserva",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/animal.jpeg",
      aspect: "portrait",
      alt: "Copetón andino (Zonotrichia capensis) con material vegetal para nido posado en poste rústico"
    },
    {
      id: "gal-13",
      title: "Barranquero coronado (Momotus) en el bosque andino",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/animal1.jpeg",
      aspect: "portrait",
      alt: "Barranquero andino coronado (Momotus aequatorialis) con su corona turquesa y cola de raqueta en el bosque nativo"
    },
    {
      id: "gal-14",
      title: "Barranquero andino en pleno vuelo sobre el dosel",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/animal2.jpeg",
      aspect: "landscape",
      alt: "Barranquero andino desplegando sus alas celestes y turquesas en pleno vuelo en el bosque de niebla"
    },
    {
      id: "gal-15",
      title: "Yaguarundí silvestre en sendero andino (Toma 1 · Sensor infrarrojo)",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/LOBO.jpg",
      aspect: "landscape",
      alt: "Yaguarundí silvestre (Herpailurus yagouaroundi) erguido en el sendero andino captado por sensor de movimiento a 1.900 msnm"
    },
    {
      id: "gal-15b",
      title: "Yaguarundí silvestre en patrullaje diurno (Toma 2 · Cuerpo completo sobre roca)",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/LOBO1.jpg",
      aspect: "landscape",
      alt: "Yaguarundí silvestre (Herpailurus yagouaroundi) en patrullaje diurno de cuerpo completo sobre roca captado por cámara trampa"
    },
    {
      id: "gal-16",
      title: "Carriquí verdiamarillo (Cyanocorax yncas) en la reserva",
      category: "fauna naturaleza",
      categoryLabel: "Fauna & Animales",
      src: "/images/registrovisual/carraquil.jpg",
      aspect: "portrait",
      alt: "Trío de carriquíes verdiamarillos (Cyanocorax yncas) posados en tronco en el bosque andino"
    },
    {
      id: "gal-17",
      title: "Floración y flora nativa de la huerta orgánica",
      category: "naturaleza experiencias",
      categoryLabel: "Naturaleza",
      src: "/images/registrovisual/DSC_0635.jpg.jpeg",
      aspect: "portrait",
      alt: "Ramas en floración rosada en la huerta orgánica y reserva natural de montaña"
    },
    {
      id: "gal-18",
      title: "Senderismo ecológico y avistamiento de aves en grupo",
      category: "experiencias momentos fauna",
      categoryLabel: "Experiencias",
      src: "/images/registrovisual/experiencia.jpg",
      aspect: "portrait",
      alt: "Grupo de caminantes y observadores de aves con binoculares en el bosque nativo de La Buitrera"
    },
    {
      id: "gal-19",
      title: "Mural artístico de biodiversidad y fauna nativa (Yaguarundí, Buitre y Caracara)",
      category: "cabañas momentos fauna experiencias",
      categoryLabel: "Arte & Biodiversidad",
      src: "/images/registrovisual/CASA1.jpg",
      aspect: "landscape",
      alt: "Mural artístico de biodiversidad en la pared exterior de la cabaña con Yaguarundí, buitre andino, caracara y flora nativa en El Ventanal al Cielo"
    },
    {
      id: "gal-19b",
      title: "Mural ecológico y arte temático en la reserva andina",
      category: "cabañas momentos fauna experiencias",
      categoryLabel: "Arte & Biodiversidad",
      src: "/images/registrovisual/CASA2.jpg",
      aspect: "landscape",
      alt: "Detalle del mural temático de conservación biológica y fauna silvestre pintado en El Ventanal al Cielo"
    },
    {
      id: "gal-ave-1",
      title: "Copetón andino (Zonotrichia capensis) anidando en la reserva",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/animal.jpeg",
      aspect: "portrait",
      alt: "Copetón andino (Zonotrichia capensis) con material vegetal para su nido posado en estaca de madera rústica"
    },
    {
      id: "gal-ave-2",
      title: "Barranquero andino coronado (Momotus aequatorialis) posado en el bosque",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/animal1.jpeg",
      aspect: "portrait",
      alt: "Barranquero andino coronado (Momotus aequatorialis) con su corona turquesa, antifaz negro y cola de péndulo. Fotografía: Daniel Marín"
    },
    {
      id: "gal-ave-3",
      title: "Barranquero andino en pleno despliegue alar sobre el dosel de niebla",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/animal2.jpeg",
      aspect: "landscape",
      alt: "Barranquero andino desplegando alas azul cobalto y turquesa en pleno vuelo en el bosque andino. Fotografía: Daniel Marín"
    },
    {
      id: "gal-ave-4",
      title: "Loro frentirrojo (Psittacara wagleri) alimentándose en árbol nativo",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/naturaleza.jpg",
      aspect: "portrait",
      alt: "Loro frentirrojo (Psittacara wagleri) con frente escarlata y plumaje verde esmeralda alimentándose de vainas y semillas en árbol nativo"
    },
    {
      id: "gal-ave-5",
      title: "Carriquí verdiamarillo (Cyanocorax yncas) en la reserva natural",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/carraquil.jpg",
      aspect: "portrait",
      alt: "Trío de carriquíes verdiamarillos (Cyanocorax yncas) con plumaje verde lima, vientre amarillo brillante, antifaz negro y corona azul posados en tronco en El Ventanal al Cielo"
    },
    {
      id: "gal-ave-6",
      title: "Tangara cabecirrufa (Tangara gyrola) alimentándose en el dosel",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/tangara-gyrola.jpg",
      aspect: "portrait",
      alt: "Tangara cabecirrufa (Tangara gyrola) con cabeza castaño rojizo, collar dorado nucal y cuerpo azul turquesa alimentándose de fruto en El Ventanal al Cielo. Fotografía: Daniel Marín"
    },
    {
      id: "gal-ave-7",
      title: "Cuco ardilla (Piaya cayana) en el bosque andino",
      category: "fauna naturaleza",
      categoryLabel: "Aves de La Buitrera",
      src: "/images/aves/cuco-ardilla.jpg",
      aspect: "portrait",
      alt: "Cuco ardilla (Piaya cayana) con plumaje marrón canela, pico amarillo y cola larga graduada con puntas blancas posado en rama en El Ventanal al Cielo. Fotografía: Daniel Marín"
    }
  ],

  birds: [
    {
      id: "gal-ave-1",
      commonName: "Copetón Andino / Chingolo",
      scientificName: "Zonotrichia capensis",
      family: "Passerellidae (Orden Passeriformes)",
      statusBadge: "Residente Andino · Canto Matutino",
      habitat: "Bordes de bosque, huerta orgánica y senderos andinos",
      altitude: "1.900 m s. n. m.",
      identification: "Se reconoce fácilmente por su cabeza con rayas negras y grises, un distintivo collar rojizo o canela a los lados del cuello, y tonos grises y cafés en el cuerpo.",
      behavior: "Ave cantora representativa de los Andes colombianos. En la imagen capturada en la reserva se le observa recolectando fibras y ramas secas para construir su nido sobre estacas y setos naturales a 1.900 msnm.",
      image: "/images/aves/animal.jpeg",
      credit: "Registro en El Ventanal al Cielo",
      tags: ["Residente", "Canto Andino", "Anidación"]
    },
    {
      id: "gal-ave-2",
      commonName: "Barranquero Andino / Soledad",
      scientificName: "Momotus aequatorialis",
      family: "Momotidae (Orden Coraciiformes)",
      statusBadge: "Emblema Andino · Corona Turquesa",
      habitat: "Bosques andinos, bordes de montaña y zonas arboladas de altitud media y alta",
      altitude: "1.900 m s. n. m.",
      identification: "Se distingue por su antifaz negro, ceja o corona azul brillante, cuerpo verde esmeralda, pico fuerte aserrado y su espectacular cola en forma de raqueta o péndulo.",
      behavior: "Permanece posado con quietud en ramas medias mientras mueve su cola como un péndulo de reloj. Es una de las especies más fotogénicas y fascinantes que conviven en el bosque de La Buitrera.",
      image: "/images/aves/animal1.jpeg",
      credit: "Daniel Marín Fotografía",
      tags: ["Emblemático", "Bosque de Niebla", "Cola Raqueta"]
    },
    {
      id: "gal-ave-3",
      commonName: "Barranquero en Pleno Vuelo",
      scientificName: "Familia Momotidae",
      family: "Momotidae (Despliegue Alar)",
      statusBadge: "Captura en Movimiento · Belleza Alar",
      habitat: "Dosel medio y alto del bosque nativo regenerado",
      altitude: "1.900 m s. n. m.",
      identification: "Impresionante captura fotográfica en pleno vuelo que expone el contraste entre su dorso verde esmeralda y el encendido abanico azul cobalto y turquesa de sus plumas primarias.",
      behavior: "El barranquero surca el aire con maniobras ágiles para cazar insectos grandes y frutos silvestres en los árboles nativos sembrados en nuestro plan de regeneración forestal.",
      image: "/images/aves/animal2.jpeg",
      credit: "Daniel Marín Fotografía",
      tags: ["Vuelo Libre", "Alas Turquesa", "Dosel Andino"]
    },
    {
      id: "gal-ave-4",
      commonName: "Loro Frentirrojo / Perico Cordillerano",
      scientificName: "Psittacara wagleri",
      family: "Psittacidae (Orden Psittaciformes)",
      statusBadge: "Bandadas Libres · Plumaje Vivo",
      habitat: "Laderas andinas, cañadas arboladas y árboles frutales de montaña",
      altitude: "1.900 m s. n. m.",
      identification: "Plumaje verde esmeralda con una marcada mancha frontal carmesí o roja en la frente, pico claro adaptado y cola cuneiforme de vuelo veloz.",
      behavior: "Suelen moverse en bandadas ruidosas y alegres al amanecer y atardecer sobrevolando la reserva. Se alimentan de semillas, vainas nativas, frutos silvestres y brotes tiernos sin pesticidas.",
      image: "/images/aves/naturaleza.jpg",
      credit: "Registro en El Ventanal al Cielo",
      tags: ["Bandadas", "Frugívoro", "Dosel Alto"]
    },
    {
      id: "gal-ave-5",
      commonName: "Carriquí Verdiamarillo / De Montaña",
      scientificName: "Cyanocorax yncas",
      family: "Corvidae (Orden Passeriformes)",
      statusBadge: "Verde Lima & Amarillo · Corona Azul",
      habitat: "Bosques andinos de niebla, bordes arbolados y senderos de montaña",
      altitude: "1.900 m s. n. m.",
      identification: "Llamativa combinación de verde lima en el dorso, vientre amarillo brillante, un rostro o 'máscara' negra, y detalles en azul intenso sobre la corona y las mejillas.",
      behavior: "Miembro de la familia de los córvidos (parientes de cuervos y urracas), sumamente inteligentes, sociables y ruidosos. En la reserva se desplazan en grupos familiares activos entre los árboles nativos y arbustos de montaña.",
      image: "/images/aves/carraquil.jpg",
      credit: "Registro en El Ventanal al Cielo",
      tags: ["Córvido Inteligente", "Sociable", "Verde y Amarillo"]
    },
    {
      id: "gal-ave-6",
      commonName: "Tangara Cabecirrufa / Cabecibaya",
      scientificName: "Tangara gyrola",
      family: "Thraupidae (Orden Passeriformes)",
      statusBadge: "Azul Turquesa & Castaño · Frugívora",
      habitat: "Estratos medios y altos del bosque andino húmedo y bordes arbolados",
      altitude: "1.900 m s. n. m.",
      identification: "Destaca por su cabeza de color castaño rojizo, un collar dorado muy delgado en la nuca y un vibrante cuerpo azul turquesa con alas verdes.",
      behavior: "Especie principalmente frugívora que adora alimentarse de pequeños frutos y bayas silvestres en los estratos medios y altos del bosque húmedo. Como se aprecia en la fotografía de Daniel Marín, forrajea activamente entre las ramas del dosel en El Ventanal al Cielo.",
      image: "/images/aves/tangara-gyrola.jpg",
      credit: "Daniel Marín Fotografía",
      tags: ["Frugívora", "Turquesa y Castaño", "Dosel Andino"]
    },
    {
      id: "gal-ave-7",
      commonName: "Cuco Ardilla / Pájaro Ardilla",
      scientificName: "Piaya cayana",
      family: "Cuculidae (Orden Cuculiformes)",
      statusBadge: "Marrón Canela · Cola Larga Graduada",
      habitat: "Bordes de bosque andino húmedo y estratos arbolados",
      altitude: "1.900 m s. n. m.",
      identification: "Plumaje marrón canela o rojizo en la parte superior y cabeza, con una espectacular cola larga graduada que termina en puntas blancas y negras, y pico amarillo o verdoso fuerte.",
      behavior: "Se mueve con asombrosa agilidad saltando velozmente entre las ramas, lo que recuerda a una ardilla (de ahí su nombre común o bobo chiso). Es un controlador biológico clave que se alimenta principalmente de insectos grandes (orugas, cigarras), arañas y pequeños lagartos.",
      image: "/images/aves/cuco-ardilla.jpg",
      credit: "Daniel Marín Fotografía",
      tags: ["Ágil Saltador", "Cola Larga", "Controlador Biológico"]
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
      answer: "El alojamiento está ubicado en La Buitrera de Palmira, sector Arenillo Alto, vía al Chalet a 1.900 m s. n. m. Al ser una vía de ladera montañosa, se recomienda vehículo con buena altura al suelo o consultar previamente el estado de la vía según las condiciones climáticas del día."
    },
    {
      id: "faq-10",
      question: "¿Se pueden preparar decoraciones especiales para aniversarios o cumpleaños?",
      answer: "¡Sí! Contamos con opción de Decoración Especial por $80.000 COP, la cual incluye: pétalos de rosa, letrero conmemorativo, globos temáticos, letrero con luz y velas decorativas. Puedes solicitarla directamente al diligenciar el formulario de consulta o por WhatsApp para tenerla lista a tu llegada."
    },
    {
      id: "faq-11",
      question: "¿Tienen servicio de restaurante y qué opciones de almuerzos o cenas ofrecen?",
      answer: "¡Sí! Contamos con servicio de alimentación campestre 100% orgánica cosechada en nuestra propia huerta: Almuerzos completos por $40.000 COP (trucha a la plancha criada en nuestros lagos de agua pura, chuletón de cerdo o carne de res; incluyen sopa, arroz, ensalada, tostadas de plátano y bebida), Cenas por $33.000 - $35.000 COP (costillas BBQ $33k, filete de pollo $33k o chuletón de cerdo $35k; incluyen arroz, chips de plátano, ensalada y bebida), además de empanadas (4 por $12.000) y aguapanela o chocolate con queso ($15.000). El desayuno campestre tradicional ya viene incluido en los planes de hospedaje nocturno."
    },
    {
      id: "faq-12",
      question: "¿Por qué El Ventanal al Cielo es un glamping ecológico y cómo es su alimentación?",
      answer: "Somos un glamping ecológico y reserva de montaña a 1.900 m s. n. m.: 1) Toda nuestra alimentación es 100% orgánica, cosechada en nuestra propia huerta sin ningún tipo de agroquímicos ni pesticidas; 2) Protegemos activamente a los polinizadores (abejas nativas meliponas, colibríes y mariposas); 3) Llevamos a cabo un proceso permanente de regeneración de bosque andino mediante la siembra de árboles nativos; 4) Nuestra agua proviene de un nacedero propio 100% pura y limpia; 5) Contamos con dos lagos ecológicos con alevinos y truchas arcoíris."
    },
    {
      id: "faq-13",
      question: "¿De dónde proviene el agua y cómo son los lagos a 1.900 m s. n. m.?",
      answer: "Nuestra agua nace en la montaña (nacedero natural propio a 1.900 metros de altura). Es agua 100% limpia, viva y pura de reserva natural, sin químicos invasivos, la cual abastece nuestras cabañas, jacuzzis, piscina natural y nutre dos hermosos lagos ecológicos donde habitan alevinos y truchas arcoíris en un entorno biológico protegido."
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

