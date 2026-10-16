// NÚMERO DE WHATSAPP
const WHATSAPP_NUMBER = "5493886441487";

// LISTA DE PRODUCTOS (Nuevos productos al inicio con descripciones personalizadas)
const PRODUCTS = [
  // 1. NUEVOS INGRESOS RECIENTES
  {
    id: 'p1',
    name: 'Chuletas para Niñas',
    category: 'Accesorios',
    price: 2000,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/sD5NL2F/CHULETAS-PARA-NI-AS-2000.jpg',
    description: 'Set de chuletas coloridas y divertidas para el cabello, perfectas para peinados infantiles llenos de estilo.'
  },
  {
    id: 'p2',
    name: 'Alas de Mariposa con Vincha y Varita',
    category: 'Fiesta',
    price: 3000,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/MxhjbH7p/ALAS-DE-MARIPOSA-CON-VINCHA-Y-VARITA-3000.jpg',
    description: 'Hermoso disfraz de mariposa que incluye alas decoradas, vincha a juego y varita mágica para jugar.'
  },
  {
    id: 'p3',
    name: 'Alas de Mariposa con Vincha y Varita',
    category: 'Fiesta',
    price: 3000,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/C3Yqdh8W/ALAS-DE-MARIPOSA-CON-VINCHA-Y-VARITA2-3000.jpg',
    description: 'Conjunto completo de mariposa con detalles brillantes, vincha con antenitas y varita mágica.'
  },
  {
    id: 'p4',
    name: 'Palitos Dentales',
    category: 'Accesorios',
    price: 2500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/8QGpwSZ/PALITOS-DENTALES-2500.jpg',
    description: 'Set práctico de palitos dentales de excelente calidad para el cuidado e higiene diaria.'
  },
  {
    id: 'p5',
    name: 'Velas Aromatizantes',
    category: 'Papelería',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/wrLGKSmD/VELAS-AROMATIZANTES2-1500.jpg',
    description: 'Velas aromáticas ideales para crear ambientes cálidos y perfumados en el hogar.'
  },
  {
    id: 'p6',
    name: 'Velas Aromatizantes',
    category: 'Papelería',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/F4W2WdYb/VELAS-1500.jpg',
    description: 'Velas decorativas con agradable fragancia para iluminar y aromatizar tus espacios.'
  },
  {
    id: 'p7',
    name: 'Velas Aromatizantes',
    category: 'Papelería',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/zV8DTLhV/VELAS-AROMATIZANTES3-1500.jpg',
    description: 'Velas con aroma suave y duradero, perfectas para regalar o regalarte un momento de relax.'
  },
  {
    id: 'p8',
    name: 'Velas Aromatizantes',
    category: 'Papelería',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/4nvL7zxy/VELA-AROMATIZANTE-1500.jpg',
    description: 'Vela aromatizante individual para sumar un toque acogedor y perfumado a cualquier rincón.'
  },
  {
    id: 'p9',
    name: 'Set de Costura',
    category: 'Accesorios',
    price: 2500,
    inStock: true,
    badge: 'Agotado',
    image: 'https://i.ibb.co/6Rzj1VYk/SET-DE-COSTURA-2500.jpg',
    description: 'Práctico kit de costura compacto que incluye hilos, agujas y accesorios esenciales para emergencias.'
  },
  {
    id: 'p10',
    name: 'Vincha Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/qL71r1Jq/VINCHA-FELIZ-CUMPLEA-OS2-1500.jpg',
    description: 'Divertida vincha decorativa con motivo de festejo para destacar al cumpleañero o cumpleañera.'
  },
  {
    id: 'p11',
    name: 'Ventilador de Mano',
    category: 'Accesorios',
    price: 6000,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/LTS7zyb/VENTILADOR-DE-MANO-6000.jpg',
    description: 'Práctico ventilador portátil de mano, recargable o a pilas, ideal para los días de calor.'
  },
  {
    id: 'p12',
    name: 'Vincha Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/bgNzzb9w/VINCHA-FELIZ-CUMPLE-1500.jpg',
    description: 'Vincha festiva de cumpleaños colorida para darle más alegría y onda a tus celebraciones.'
  },
  {
    id: 'p13',
    name: 'Velas Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/TBrZ65MB/VELAS-FELIZ-CUMPLE-1500.jpg',
    description: 'Velas decorativas especiales para torta de cumpleaños con diseño festivo.'
  },
  {
    id: 'p14',
    name: 'Velas Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/JwNKYjYs/VELAS-FELIZ-CUMPLEA-OS-1500.jpg',
    description: 'Set de velas de cumpleaños coloridas para decorar la torta y pedir los mejores deseos.'
  },
  {
    id: 'p15',
    name: 'Platos Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/ksW03CXs/PLATOS-FELIZ-CUMPLEA-OS2-1500.jpg',
    description: 'Platos descartables temáticos de feliz cumpleaños para una mesa alegre y fácil de limpiar.'
  },
  {
    id: 'p16',
    name: 'Platos Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/WNVG4TCG/PLATILLO-PARA-CUMPLEA-OS-1500.jpg',
    description: 'Platillos decorativos descartables para tortas y golosinas en fiestas de cumpleaños.'
  },
  {
    id: 'p17',
    name: 'Sangre Falsa',
    category: 'Fiesta',
    price: 2000,
    inStock: true,
    badge: 'HALLOWEEN',
    image: 'https://i.ibb.co/RpPYbSyS/SANGRE-FALSA-2000.jpg',
    description: 'Efecto de sangre falsa ideal para disfraces terroríficos, maquillaje artístico y Halloween.'
  },
  {
    id: 'p18',
    name: 'Platos Feliz Cumple',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/3Y7XFSqT/PLATO-FELIZ-CUMPLEA-OS3-1500.jpg',
    description: 'Platos descartables con diseño festivo de cumpleaños para completar la decoración de tu evento.'
  },
  {
    id: 'p19',
    name: 'Tela de Araña',
    category: 'Fiesta',
    price: 1000,
    inStock: true,
    badge: 'HALLOWEEN',
    image: 'https://i.ibb.co/gM6BsVLt/TELARA-A-1000.jpg',
    description: 'Tela de araña decorativa elástica para ambientar fiestas temáticas y decoraciones de Halloween.'
  },
  {
    id: 'p20',
    name: 'Chuletas',
    category: 'Accesorios',
    price: 1500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/q2X9MsD/CHULETAS-1500.jpg',
    description: 'Pinches o chuletas para el cabello con diseños modernos y excelente sujeción.'
  },
  {
    id: 'p21',
    name: 'Set de Trabitas para Niñas',
    category: 'Accesorios',
    price: 1500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/GQ1NQZZR/SET-DE-TRABITAS-PARA-NI-AS2-1500.jpg',
    description: 'Set variado de trabitas infantiles para el cabello con adorables formas y colores.'
  },
  {
    id: 'p22',
    name: 'Chuletas',
    category: 'Accesorios',
    price: 1500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/BKc4RT2X/CHULETAS2-1500.jpg',
    description: 'Chuletas para el pelo súper prácticas y cancheras para armar peinados rápidos.'
  },

  // 2. INGRESOS ANTERIORES
  {
    id: 'p23',
    name: 'Chuletas para Niñas',
    category: 'Accesorios',
    price: 2000,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/BV40dFc5/CHULETAS-PARA-NI-AS2-2000.jpg',
    description: 'Hermoso set de chuletas para el cabello, ideales para peinados coloridos y divertidos en niñas.'
  },
  {
    id: 'p24',
    name: 'Set de Chuletas y Anteojos para Niñas',
    category: 'Accesorios',
    price: 3000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/xyKM04r/SET-DE-CHULETAS-Y-ANTEOJOS-PARA-NI-AS3-3000.jpg',
    description: 'Combina diversión y estilo con este set que incluye chuletas para el pelo y anteojos de sol super coquetos.'
  },
  {
    id: 'p25',
    name: 'Set de Chuletas y Anteojos para Niñas',
    category: 'Accesorios',
    price: 3000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/k2qv6chy/SET-DE-CHULETA-Y-ANTEOJOS-PARA-NI-AS-3000.jpg',
    description: 'Kit de accesorios de moda para niñas con anteojos y chuletas para el cabello a juego.'
  },
  {
    id: 'p26',
    name: 'Set de Chuletas y Anteojos para Niñas',
    category: 'Accesorios',
    price: 3000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/FtV09dC/SET-DE-CHULETAS-Y-ANTEOJOS-PARA-NI-AS4-3000.jpg',
    description: 'Completo conjunto de moda infantil con anteojos y chuletas para lucir un look único.'
  },
  {
    id: 'p27',
    name: 'Set de Chuletas y Anteojos para Niñas',
    category: 'Accesorios',
    price: 3000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/g2T61jp/SET-DE-CHULETA-Y-ANTEOJOS-PARA-NI-AS2-3000.jpg',
    description: 'Set coordinado de accesorios para el cabello con anteojos para niñas, excelente para regalar.'
  },
  {
    id: 'p28',
    name: 'Set de Trabitas para Niñas',
    category: 'Accesorios',
    price: 1500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/zVttTzGm/SET-DE-TRABITAS-PARA-NI-AS-1500.jpg',
    description: 'Set de trabitas y broches infantiles para sujetar el cabello con variados diseños encantadores.'
  },
  {
    id: 'p29',
    name: 'Vela Hornito',
    category: 'Papelería',
    price: 7000,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/RTSmZGT9/VELA-HORNITO-7000.jpg',
    description: 'Vela aromatizante para hornito de fragancias. Ideal para dar un toque cálido y perfumado al hogar.'
  },
  {
    id: 'p30',
    name: 'Bolsita para Regalo',
    category: 'Papelería',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/4RhJpz28/BOLSITA-PARA-REGALO-1500.jpg',
    description: 'Bolsita de regalo decorada, ideal para presentar tus obsequios de forma delicada y especial.'
  },
  {
    id: 'p31',
    name: 'Aromatizante',
    category: 'Papelería',
    price: 3500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/0y7XFhkS/AROMATIZANTE2-3500.jpg',
    description: 'Aromatizante ambiental con fragancia duradera para mantener tus espacios frescos y agradables.'
  },
  {
    id: 'p32',
    name: 'Aromatizante',
    category: 'Papelería',
    price: 3500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/B2kZMwHV/AROMATIZANTE-3500.jpg',
    description: 'Difusor de aroma para ambientes con excelente fijación de fragancia.'
  },
  {
    id: 'p33',
    name: 'Corona para Niña',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/0VMtm9qL/CORO-A-PARA-NI-A-1500.jpg',
    description: 'Hermosa corona o tiara de princesa para niñas, ideal para festejos de cumpleaños, disfraces y juegos.'
  },

  // 3. RESTO DEL CATÁLOGO ORIGINAL
  {
    id: 'p34',
    name: 'Máscara de Anonymous',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/gLrXDPs2/MASCARA-DE-ANONYMOUS.jpg',
    description: 'Máscara clásica de Guy Fawkes (Anonymous). Liviana, con elástico cómodo, ideal para fiestas temáticas, disfraces y Halloween.'
  },
  {
    id: 'p35',
    name: 'Máscara de Ghost Face',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/9kYMjRHY/MASCARA-DE-SCREAM.jpg',
    description: 'Icónica máscara de terror Ghost Face (Scream) con capucha negra incorporada. Perfecta para dar sustos y destacar en fiestas de disfraces.'
  },
  {
    id: 'p36',
    name: 'Gorro de Bruja',
    category: 'Fiesta',
    price: 2500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/7dyYkvLD/GORRO-DE-BRUJA.jpg',
    description: 'Gorro puntiagudo de bruja clásico para disfraz. Excelente accesorio para completar tu outfit festivo de Noche de Brujas.'
  },
  {
    id: 'p37',
    name: 'Gorro de Bruja',
    category: 'Fiesta',
    price: 2500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/7tvWL12h/GORRO-DE-BRUJA-2.jpg',
    description: 'Gorro de bruja con diseño especial, ideal para caracterizaciones, eventos escolares, fiestas de disfraces y Halloween.'
  },
  {
    id: 'p38',
    name: 'Pollera Halloween',
    category: 'Fiesta',
    price: 3500,
    inStock: true,
    badge: 'HALLOWEEN',
    image: 'https://i.ibb.co/LdmYKvmB/POLLERA-HALLOWEEN.jpg',
    description: 'Pollera temática de Halloween ideal para disfraces, fiestas y eventos festivos.'
  },
  {
    id: 'p39',
    name: 'Pollera Halloween',
    category: 'Fiesta',
    price: 3500,
    inStock: true,
    badge: 'HALLOWEEN',
    image: 'https://i.ibb.co/4wKM6mDP/POLLERA-HALLOWEEN-2.jpg',
    description: 'Pollera temática de Halloween ideal para disfraces, fiestas y eventos festivos.'
  },
  {
    id: 'p40',
    name: 'Cuaderno Inteligente',
    category: 'Cuadernos',
    price: 4500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/MDDxz4QD/CUADERNO-INTELIGENTE.jpg',
    description: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p41',
    name: 'Cuaderno Inteligente',
    category: 'Cuadernos',
    price: 4500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/LzFJcRQ8/CUADERNO-INTELIGENTE-2.jpg',
    description: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p42',
    name: 'Cuaderno Inteligente',
    category: 'Cuadernos',
    price: 4500,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/6RHvWrrr/CUADERNO-INTELIGENTE-3.jpg',
    description: 'Cuaderno inteligente con sistema de hojas removibles.'
  },
  {
    id: 'p43',
    name: 'Cuaderno Eco A5',
    category: 'Cuadernos',
    price: 2000,
    inStock: true,
    badge: 'ECO',
    image: 'https://i.ibb.co/zV1LMpzC/CUADERNO-ECO-A5.jpg',
    description: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p44',
    name: 'Libreta Anillada A6',
    category: 'Libretas',
    price: 2000,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/TDtfKK0d/LIBRETA-ANILLADA-A6.jpg',
    description: 'Libreta anillada práctica tamaño A6.'
  },
  {
    id: 'p45',
    name: 'Anotador con Borde con Forma',
    category: 'Anotadores',
    price: 2000,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/SXFqjkQ2/ANOTADOR-CON-BORDE-CON-FORMA.jpg',
    description: 'Anotador infantil con borde troquelado con forma.'
  },
  {
    id: 'p46',
    name: 'Libreta con Lapicera',
    category: 'Libretas',
    price: 1500,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/bgDWby9M/LIBRETA-CON-LAPICERA.jpg',
    description: 'Set de libreta que incluye lapicera a juego.'
  },
  {
    id: 'p47',
    name: 'Banderín Feliz Cumpleaños',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/YB0zcBnq/BANDERIN-FELIZ-CUMPLEA-OS.jpg',
    description: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p48',
    name: 'Anotador con Elástico',
    category: 'Anotadores',
    price: 2500,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/Y4gjv7C0/ANOTADOR-CON-ELASTICO.jpg',
    description: 'Anotador con cierre elástico.'
  },
  {
    id: 'p49',
    name: 'Cuaderno Eco A5',
    category: 'Cuadernos',
    price: 2000,
    inStock: true,
    badge: 'ECO',
    image: 'https://i.ibb.co/Rkw80mys/CUADERNO-A5-c.jpg',
    description: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p50',
    name: 'Cuaderno Eco A5',
    category: 'Cuadernos',
    price: 2000,
    inStock: true,
    badge: 'ECO',
    image: 'https://i.ibb.co/zhtZmsvF/CUADERNO-A5.jpg',
    description: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p51',
    name: 'Cuaderno Eco A5',
    category: 'Cuadernos',
    price: 2000,
    inStock: true,
    badge: 'ECO',
    image: 'https://i.ibb.co/N8sVV6c/CUADERNO-ECO-A5-c.jpg',
    description: 'Cuaderno ecológico tamaño A5.'
  },
  {
    id: 'p52',
    name: 'Anotador con Borde',
    category: 'Anotadores',
    price: 2000,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/BKTt1j69/ANOTADOR-CON-BORDE.jpg',
    description: 'Anotador con diseño especial en los bordes.'
  },
  {
    id: 'p53',
    name: 'Anotador con Borde',
    category: 'Anotadores',
    price: 2000,
    inStock: true,
    badge: 'DISPONIBLE',
    image: 'https://i.ibb.co/N2SLMpB3/ANOTADOR-CON-BORDE-b.jpg',
    description: 'Anotador con diseño especial en los bordes.'
  },
  {
    id: 'p54',
    name: 'Post It',
    category: 'Papelería',
    price: 1500,
    inStock: false,
    badge: 'AGOTADO',
    image: 'https://i.ibb.co/FLwWH5hq/POST-IT-b.jpg',
    description: 'Notas adhesivas tipo Post It.'
  },
  {
    id: 'p55',
    name: 'Banderín Feliz Cumpleaños',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/ksN6d0PP/BANDERIN-FELIZ-CUMPLEA-OS-c.jpg',
    description: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p56',
    name: 'Banderín Feliz Cumpleaños',
    category: 'Fiesta',
    price: 1500,
    inStock: true,
    badge: 'CUMPLE',
    image: 'https://i.ibb.co/ZR22r0Tr/BANDERIN-FELIZ-CUMPLEA-OS-2.jpg',
    description: 'Banderín decorativo para festejos de cumpleaños.'
  },
  {
    id: 'p57',
    name: 'Libreta de Osito con Lapicera',
    category: 'Libretas',
    price: 1500,
    inStock: true,
    badge: 'TENDER',
    image: 'https://i.ibb.co/twtx8TZG/LIBRETA-DE-OSITO-CON-LAPICERA.jpg',
    description: 'Libreta diseño Osito incluye lapicera.'
  },
  {
    id: 'p58',
    name: 'Chuletas x6',
    category: 'Accesorios',
    price: 500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/xSWTwb0M/CHULETA-X6.jpg',
    description: 'Set de 6 chuletas para el cabello.'
  },
  {
    id: 'p59',
    name: 'Set Fashion x5',
    category: 'Accesorios',
    price: 2500,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/Hpr35xQr/SET-FASHION-X5.jpg',
    description: 'Set de moda fashion por 5 piezas.'
  },
  {
    id: 'p60',
    name: 'Cajita Organizadora',
    category: 'Papelería',
    price: 2000,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/SwqFy7r2/CAJITA-ORGANIZADORA.jpg',
    description: 'Cajita organizadora para tus accesorios y elementos.'
  },
  {
    id: 'p61',
    name: 'Set de Accesorios para Niña',
    category: 'Accesorios',
    price: 2000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/jPWLvHS0/SET-DE-ACCESORIOS-PARA-NI-A.jpg',
    description: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p62',
    name: 'Set de Accesorios para Niña',
    category: 'Accesorios',
    price: 2000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/2TmRymk/SET-ACCESORIOS-NI-A.jpg',
    description: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p63',
    name: 'Set de Accesorios para Niña',
    category: 'Accesorios',
    price: 2000,
    inStock: true,
    badge: 'SET',
    image: 'https://i.ibb.co/DfSyNssB/SET-ACCESORIOS-NI-A-3.jpg',
    description: 'Set de hermosos accesorios para niña.'
  },
  {
    id: 'p64',
    name: 'Kit de Manualidades Bijouterie',
    category: 'Manualidades',
    price: 5000,
    inStock: true,
    badge: 'DESTACADO',
    image: 'https://i.ibb.co/7dDzQ3WB/KIT-DE-MANUALIDADES-BIJOUTERIU.jpg',
    description: 'Completo kit de manualidades para crear tu propia bijouterie.'
  },
  {
    id: 'p65',
    name: 'Set de Chuletas x6',
    category: 'Accesorios',
    price: 500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/BKVZfkk9/CHULETAS.jpg',
    description: 'Set de 6 chuletas para el cabello.'
  },
  {
    id: 'p66',
    name: 'Botella Sorbete',
    category: 'Accesorios',
    price: 4500,
    inStock: true,
    badge: 'NUEVO',
    image: 'https://i.ibb.co/Kk9rcxT/BOTELLAS.jpg',
    description: 'Botella práctica con sorbete integrado.'
  }
];

let cart = [];
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  setupWhatsappLinks();
  renderProducts();
  setupEventListeners();
});

function setupWhatsappLinks() {
  const defaultMsg = "¡Hola Mundo Garabato!\n\nQuisiera hacer una consulta.";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
  const topBtn = document.getElementById('topWhatsappBtn');
  const floatBtn = document.getElementById('floatingWhatsappBtn');
  if (topBtn) topBtn.href = waUrl;
  if (floatBtn) floatBtn.href = waUrl;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;
  
  let filtered = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const stockFilter = document.getElementById('stockFilterSelect')?.value || 'all';
    const matchesStock = stockFilter === 'all' || 
                        (stockFilter === 'in-stock' && p.inStock) || 
                        (stockFilter === 'out-of-stock' && !p.inStock);

    return matchesSearch && matchesStock;
  });

  const sortBy = document.getElementById('sortSelect')?.value || 'featured';
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  const countTag = document.getElementById('productCountTag');
  if (countTag) countTag.textContent = `${filtered.length} productos`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(product => {
    const isInStock = product.inStock;
    
    const cartBtnStyle = isInStock 
      ? 'bg-gradient-to-r from-brand-pink to-purple-600 text-white hover:shadow-lg hover:scale-[1.02] active:scale-95' 
      : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed';

    const waBtnStyle = isInStock 
      ? 'bg-emerald-500 hover:bg-emerald-600 text-white hover:scale-[1.02] active:scale-95' 
      : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed';

    return `
      <div class="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-sm hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between group relative">
        <div class="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 flex flex-col gap-1">
          ${!isInStock 
            ? `<span class="bg-slate-200 text-slate-600 text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase border border-slate-300">
                ❌ Agotado
               </span>`
            : `<span class="bg-brand-pink text-white text-[8px] sm:text-[10px] font-black px-1.5 sm:px-2.5 py-0.5 rounded-full uppercase shadow">
                ${product.badge || 'DISPONIBLE'}
               </span>`
          }
        </div>

        <div class="relative bg-slate-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 mb-2 sm:mb-3 overflow-hidden group-hover:bg-purple-50/40 transition-colors cursor-pointer" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" 
            class="w-full h-28 sm:h-44 object-contain mx-auto group-hover:scale-105 transition-transform"
            onerror="this.src='https://via.placeholder.com/300x300?text=Mundo+Garabato'">
          
          <div class="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
            <span class="bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Ver Detalle
            </span>
          </div>
        </div>

        <div class="space-y-1 mb-2 sm:mb-3">
          <span class="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 block">${product.category}</span>
          <h3 class="font-heading font-bold text-slate-800 text-xs sm:text-sm line-clamp-1 group-hover:text-brand-pink transition-colors">
            ${product.name}
          </h3>
          
          <div class="pt-0.5 flex items-baseline justify-between">
            <span class="text-sm sm:text-xl font-black text-slate-800">
              $${product.price.toLocaleString('es-AR')}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-1 sm:gap-2 pt-2 border-t border-slate-100">
          <button 
            onclick="${isInStock ? `addToCart('${product.id}')` : 'event.preventDefault()'}" 
            ${!isInStock ? 'disabled' : ''} 
            class="py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg sm:rounded-xl font-heading font-bold text-[10px] sm:text-xs flex items-center justify-center gap-0.5 sm:gap-1 transition-all ${cartBtnStyle}">
            <i data-lucide="shopping-cart" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>
            <span>${isInStock ? 'Agregar' : 'Agotado'}</span>
          </button>

          <button 
            onclick="${isInStock ? `buyDirectWhatsApp('${product.id}')` : 'event.preventDefault()'}" 
            ${!isInStock ? 'disabled' : ''} 
            class="py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg sm:rounded-xl font-heading font-bold text-[10px] sm:text-xs flex items-center justify-center gap-0.5 sm:gap-1 transition-all ${waBtnStyle}">
            <i data-lucide="message-circle" class="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"></i>
            <span>${isInStock ? 'Encargar' : 'Sin Stock'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('modalContainer');
  
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalPrice').textContent = `$${product.price.toLocaleString('es-AR')}`;
  document.getElementById('modalDescription').textContent = product.description;

  const stockBadge = document.getElementById('modalStockBadge');
  if (product.inStock) {
    stockBadge.textContent = '✅ En Stock Disponibles';
    stockBadge.className = 'absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full shadow bg-emerald-500 text-white';
  } else {
    stockBadge.textContent = '❌ Sin Stock / Agotado';
    stockBadge.className = 'absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full shadow bg-slate-300 text-slate-600';
  }

  const actionsDiv = document.getElementById('modalActions');
  if (product.inStock) {
    actionsDiv.innerHTML = `
      <button onclick="addToCart('${product.id}'); closeQuickView();" class="w-full bg-gradient-to-r from-brand-pink to-purple-600 text-white font-bold py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs">
        <i data-lucide="shopping-bag" class="w-4 h-4"></i> Agregar al Carrito
      </button>
      <button onclick="buyDirectWhatsApp('${product.id}')" class="w-full bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl hover:bg-emerald-600 flex items-center justify-center gap-2 text-xs">
        <i data-lucide="message-circle" class="w-4 h-4 fill-current"></i> Pedir por WhatsApp
      </button>
    `;
  } else {
    actionsDiv.innerHTML = `
      <button disabled class="w-full bg-gray-100 text-gray-400 border-2 border-gray-200 font-bold py-2.5 px-4 rounded-xl cursor-not-allowed text-xs">
        Producto Agotado
      </button>
    `;
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    container.classList.remove('scale-95', 'opacity-0');
    container.classList.add('scale-100', 'opacity-100');
  }, 10);

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('modalContainer');
  if (!modal || !container) return;
  
  container.classList.remove('scale-100', 'opacity-100');
  container.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.inStock) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  try {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#FF4B82', '#FFC837', '#8B5CF6']
      });
    }
  } catch (e) {}

  updateCartUI();
  openCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalItems;

  if (cart.length === 0) {
    if (cartItemsList) {
      cartItemsList.innerHTML = `
        <div class="text-center py-10 text-slate-400">
          <i data-lucide="shopping-bag" class="w-10 h-10 mx-auto mb-2 stroke-1"></i>
          <p class="font-bold text-xs">Tu carrito está vacío</p>
        </div>
      `;
    }
    if (cartTotal) cartTotal.textContent = '$0';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  if (cartItemsList) {
    cartItemsList.innerHTML = cart.map(item => `
      <div class="flex items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain bg-white rounded-xl p-1">
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-xs text-slate-800 truncate">${item.name}</h4>
          <span class="text-xs font-black text-brand-pink">$${(item.price * item.quantity).toLocaleString('es-AR')}</span>
        </div>
        <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1">
          <button onclick="changeQuantity('${item.id}', -1)" class="w-5 h-5 flex items-center justify-center font-black text-slate-500 hover:text-red-500">-</button>
          <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
          <button onclick="changeQuantity('${item.id}', 1)" class="w-5 h-5 flex items-center justify-center font-black text-slate-500 hover:text-emerald-500">+</button>
        </div>
      </div>
    `).join('');
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotal) cartTotal.textContent = `$${total.toLocaleString('es-AR')}`;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartContent');
  if (!drawer || !content) return;
  drawer.classList.remove('hidden');
  setTimeout(() => {
    content.classList.remove('translate-x-full');
  }, 10);
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const content = document.getElementById('cartContent');
  if (!drawer || !content) return;
  content.classList.add('translate-x-full');
  setTimeout(() => {
    drawer.classList.add('hidden');
  }, 300);
}

function buyDirectWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.inStock) return;

  const message = `¡Hola Mundo Garabato!\n\nQuisiera encargar:\n*${product.name}*\nPrecio: $${product.price.toLocaleString('es-AR')}\n\n¿Cómo coordinamos el pago y entrega? ¡Muchas gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }

  let itemsText = cart.map(item => `• ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString('es-AR')}`).join('\n');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const message = `¡Hola Mundo Garabato!\n\nQuiero realizar el siguiente pedido:\n\n*Productos:*\n${itemsText}\n\n*TOTAL:* $${total.toLocaleString('es-AR')}\n\n¿Cómo coordinamos la transferencia y el envío? ¡Gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function applyFilters() {
  renderProducts();
}

function resetFilters() {
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const sortSelect = document.getElementById('sortSelect');
  const stockFilterSelect = document.getElementById('stockFilterSelect');

  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
  if (sortSelect) sortSelect.value = 'featured';
  if (stockFilterSelect) stockFilterSelect.value = 'all';

  renderProducts();
}

function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');

  const handleSearch = (e) => {
    searchQuery = e.target.value;
    renderProducts();
  };

  if (searchInput) searchInput.addEventListener('input', handleSearch);
  if (mobileSearchInput) mobileSearchInput.addEventListener('input', handleSearch);

  const cartDrawerBtn = document.getElementById('cartDrawerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');

  if (cartDrawerBtn) cartDrawerBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);
}
