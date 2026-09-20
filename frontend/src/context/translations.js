export const translations = {
  en: {
    
    nav_home: "Home",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_tech: "Tech Stack",
    nav_contact: "Contact",

    
    hero_greeting: "Hi, I'm Luis",
    hero_role: "Software Development Engineering Intern",
    hero_bio: "Passionate Full-Stack Developer dedicated to building solid end-to-end solutions. I turn ideas into web and cross-platform applications using React, Node.js, and Flutter. I enjoy designing scalable architectures backed by robust databases and Docker deployments.",
    hero_btn_projects: "▶ View Projects",
    hero_btn_contact: "✉ Contact Me",
    hero_btn_cv: "📄 Resume",
    hero_cv_url: "/cv-en.pdf",

    
    about_title: "About me",
    about_age: "Age:",
    about_location: "Location:",
    about_english: "English:",
    about_english_val: "B2 (Certified English score)",
    about_role: "> T.S.U. | Software Engineering Student @ UTSJR",
    about_p1: "I'm a Software Engineering intern and full-stack developer, constantly growing and learning. I love being involved in the entire lifecycle of a product: understanding the core needs, architecting a solution, and turning it into a clear, functional experience for the user.",
    about_p2: "I consider myself a curious, self-taught, and highly responsible person. I thrive on tackling complex challenges and I'm always eager to learn new tools and refine my skills with every project.",

    
    tl_exp_title: "Network Operator",
    tl_exp_subtitle: "CNOC Telmex - Coppel",
    tl_exp_desc: "Network event monitoring, diagnostics, and management for critical infrastructure. Provided tier-1 LAN/WAN support ensuring high availability. Administered essential TCP/IP services (DNS, DHCP, routers, switches).",
    
    tl_edu1_title: "Software Development Engineering",
    tl_edu1_subtitle: "Universidad Tecnológica de San Juan del Río",
    tl_edu1_desc: "Continuing my professional education focusing on advanced software architecture, agile methodologies, databases, and modern development practices.",
    
    tl_edu2_title: "A.S. in Information Technology",
    tl_edu2_subtitle: "Universidad Tecnológica de San Juan del Río",
    tl_edu2_desc: "Technical university degree consolidating strong foundations in software development, systems analysis, and infrastructure management.",
    
    tl_present: "PRESENT",
    tl_may: "MAY",
    tl_aug: "AUG",
    tl_sep: "SEP",
    tl_dec: "DEC",

    
    proj_title: "System Projects",
    proj_filter_all: "All",
    proj_btn_view: "[+] VIEW",
    proj_btn_code: "[B] CODE",
    proj_back: "← Back to projects",
    proj_gallery: "Image Gallery:",

    inv_short: "Comprehensive SaaS platform for inventory management and POS with Multimodal AI (Google Gemini 2.5 Flash).",
    lira_short: "Asynchronous AI assistant built with Node.js, Google Gemini API, and MongoDB databases.",
    uhc_short: "Full-Stack platform for managing e-sports tournaments and interactive Minecraft events.",
    cash_short: "Mobile app in Flutter for personal and shared finance management with an AI assistant (Gemini).",

    
    proj_det_tech: "Technologies used",
    proj_det_tech_review: "Technologies under review",
    proj_det_about: "About the project",
    proj_det_file: "File",
    proj_det_edit: "Edit",
    proj_det_view: "View",
    proj_det_help: "Help",
    proj_det_features: "Features",
    proj_det_repo: "* View repository",
    proj_det_prev: "PREV",
    proj_det_next: "NEXT",
    proj_det_preview: "Project preview",
    proj_det_docs_wip: "Documentation for this project is under construction.",
    proj_det_feat_wip: "Features pending documentation.",

    
    inv_desc: "Inventory 360 is a modern software solution designed to bridge the traditional gap between warehouse control, the sales floor, and management decision-making. Integrating advanced Cognitive AI capabilities (Google Gemini), the platform goes beyond simple transactional logging, turning your inventory into an active assistant that predicts demand 60 days ahead, alerts early about stock-outs, and allows executing tasks via spoken or written natural language.",
    inv_f1: "Omnichannel Cloud Architecture: Serverless infrastructure using Node.js and MongoDB, designed for horizontal scalability and high availability.",
    inv_f2: "Conversational AI Interface: Chatbot powered by Google Gemini that understands natural language inventory queries (e.g., 'Do we have red running shoes in size 9?').",
    inv_f3: "Predictive Analytics: Machine Learning models to forecast stock depletion and generate automatic restock alerts.",
    inv_f4: "Point of Sale (POS): Visual catalog, dynamic cart, and fast checkout with atomic stock deduction.",
    inv_f5: "RBAC Architecture: Segmented access control between Administrator and Vendor/POS roles.",

    
    lira_desc: "Lira is a robust backend service operating as a headless intelligent agent integrated directly with WhatsApp as the main communication channel. Using whatsapp-web.js, Lira listens to incoming messages in real time, routes them to the AI logic, and returns contextualized responses—all without needing a graphical interface.\n\nMuch more than a simple conversational bot, Lira works as a proactive backend architecture capable of managing complex task scheduling, emotional state tracking, natural language intent analysis, and dynamically switching its AI personality based on the user interacting with it.",
    lira_f1: "Dynamic Multi-character Context: Dynamically changes system prompts and processing rules based on the incoming user. Isolated contexts, independent history per user, and personalized responses.",
    lira_f2: "Natural Language Scheduling: Uses chrono-node to extract temporal data from messages. Supports single and recurring reminders with proper UTC timezone handling.",
    lira_f3: "Background Workers: Recursive validation loops that continuously query the database for scheduled events, automatically generating summaries and sending proactive notifications via WhatsApp.",
    lira_f4: "LLM Sentiment Analysis: Emotional diary that asks users how they feel, processes responses with Gemini into structured JSON, and generates automated weekly summaries.",
    lira_f5: "Multimodal Processing: Receives and processes images and voice notes. Images are analyzed with Gemini Vision, and audio is automatically transcribed before hitting the NLU pipeline.",
    lira_f6: "Exponential Backoff Retries: Robust retry system to handle 503 errors from the AI model.",
    lira_f7: "Smart List Management: Full CRUD of thematic lists via natural language: add items, view lists, delete individual items, or wipe entire lists.",
    lira_f8: "NLU Intent Router: Zero-shot intent classifier using Gemini that analyzes messages alongside context history to determine the correct action among 10+ possible intents.",

    
    uhc_desc: "UHC NOVA is an advanced tournament management system designed to automate and administer competitive e-sports events, specifically for the Ultra Hardcore (UHC) game mode. It acts as a comprehensive solution integrating an interactive dashboard for participants and a secure admin panel for organizers, allowing total control over the events, team registrations, and real-time metrics.\n\nArchitecture & Technologies:\nThe project is built following Clean Code standards, a decoupled client-server architecture, and a SaaS-oriented model.\nThe Frontend uses React, Vite, and Tailwind CSS for a fast, responsive SPA, supported by Motion and Radix for fluid micro-animations and a premium experience. The Backend is developed with Node.js and Express, providing a high-performance RESTful API. For the Database, Prisma ORM with SQLite was implemented, designed to scale to PostgreSQL, and it features a robust Cybersecurity system using JWT (JSON Web Tokens) and Bcrypt encryption.",
    uhc_f1: "Advanced Team Registration & Hierarchy System: Creation of 4-player 'Squads' with Captain and Recruit roles, featuring automatic integrity validation.",
    uhc_f2: "'High Command' Terminal (Back-office): Secure admin panel to monitor metrics, manage tournament phases, and audit payment receipts.",
    uhc_f3: "Real-time Dashboards (Telemetry): Dynamic interfaces with countdowns, tournament status, and active 'mechanics' during the event.",
    uhc_f4: "Secure Authentication Flows: Role-based protected access. Only captains or admins can interact with management features.",

    
    cash_desc: "This is a mobile application developed in Flutter focused on personal finance management, with the capability to extend into shared couple finances. The app helps users keep strict track of their budget, income, expenses, and financial goals. It features a friendly pastel-style design and an AI-powered assistant (Gemini) to provide personalized summaries and advice.\n\nArchitecture & Technologies:\nThe project is modularly structured to ensure scalability and maintainability using Flutter (Dart), Riverpod for state management, and Firebase (Authentication, Cloud Firestore) as the backend. The AI is integrated with Google Generative AI (Gemini API), utilizing fl_chart for graphs and flutter_local_notifications for local alerts.\n\nTechnical Justification:\nChoosing Flutter as the main framework allows building a high-quality product across multiple platforms using a single codebase. Utilizing Firebase provides real-time data storage and synchronization, vital for a daily-use financial app.",
    cash_f1: "Simple Authentication: Easy login system that automatically maps generic usernames.",
    cash_f2: "Dashboard: Panoramic view of finances with donut charts for budget control.",
    cash_f3: "Transaction Management: Logging of daily income and expenses organized by categories (individual or shared).",
    cash_f4: "Monthly Budget: Setting and tracking limits for fixed and variable expenses.",
    cash_f5: "Savings Goals: Interactive tracking for long-term objectives (e.g., House, Trip).",
    cash_f6: "AI Financial Advisor (Gemini): Reads the account statement and provides dynamic advice or alerts for budget deviations.",

    
    tech_title: "Tech Stack",
    tech_lang: "Languages",
    tech_lang_desc: "The foundation of everything I build.",
    tech_fw: "Frameworks",
    tech_fw_desc: "Accelerators to create modern and adaptable software.",
    tech_db: "Databases",
    tech_db_desc: "Secure and structured storage.",
    tech_tools: "Tools",
    tech_tools_desc: "My day-to-day allies.",

    
    contact_title: "Direct Connection",
    contact_email_title: "Email",
    contact_email_btn: "Send Email",
    contact_github_btn: "View Profile",
    contact_linkedin_btn: "View Profile",
    
    
    sep_projects: "C:\\Program_Files\\Projects",
    sep_tech: "C:\\Program_Files\\Technologies",
    sep_contact: "C:\\Program_Files\\Contact",
  },
  es: {
    
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_tech: "Tecnologías",
    nav_contact: "Contacto",

    
    hero_greeting: "Hola, Soy Luis",
    hero_role: "Pasante de Ingenieria en Desarrollo y Gestion de Software",
    hero_bio: "Desarrollador Full-Stack apasionado por construir soluciones sólidas de extremo a extremo. Transformo ideas en aplicaciones web y multiplataforma usando React, Node.js y Flutter. Disfruto diseñar arquitecturas escalables respaldadas por bases de datos robustas y despliegues con Docker.",
    hero_btn_projects: "▶ Ver proyectos",
    hero_btn_contact: "✉ Contactar",
    hero_btn_cv: "📄 CV",
    hero_cv_url: "/cv.pdf", 

    
    about_title: "Sobre mí",
    about_age: "Edad:",
    about_location: "Ubicación:",
    about_english: "Inglés:",
    about_english_val: "B2 (Certificado English score)",
    about_role: "> T.S.U. | Ing. en Desarrollo y Gestión de Software (En proceso de titulación) @ UTSJR",
    about_p1: "Soy pasante de Ingeniería en Desarrollo y Gestión de Software y desarrollador web y móvil, enfocado en seguir creciendo como Full-Stack. Me gusta participar en todo el proceso de construcción de un producto: entender una necesidad, plantear una solución y convertirla en una experiencia clara y funcional para el usuario.",
    about_p2: "Me considero una persona curiosa, autodidacta y responsable. Disfruto enfrentando retos complejos siempre con disposición para aprender nuevas herramientas y mejorar con cada proyecto.",

    
    tl_exp_title: "Operador de Red",
    tl_exp_subtitle: "CNOC Telmex - Coppel",
    tl_exp_desc: "Monitoreo, diagnóstico y gestión de eventos de red para la infraestructura crítica. Brindé soporte de primer nivel LAN/WAN asegurando alta disponibilidad. Administración de servicios TCP/IP (DNS, DHCP, routers, switches).",
    
    tl_edu1_title: "Ingeniería en Desarrollo de Software",
    tl_edu1_subtitle: "Universidad Tecnológica de San Juan del Río",
    tl_edu1_desc: "Continuación de mi formación profesional enfocada en el desarrollo, metodologías ágiles, bases de datos y arquitectura tecnológica avanzada.",
    
    tl_edu2_title: "T.S.U. en Tecnologías de la Información",
    tl_edu2_subtitle: "Universidad Tecnológica de San Juan del Río",
    tl_edu2_desc: "Formación universitaria técnica consolidando bases sólidas en desarrollo de software, análisis de sistemas y gestión de infraestructuras.",
    
    tl_present: "ACTUALIDAD",
    tl_may: "MAY",
    tl_aug: "AGO",
    tl_sep: "SEP",
    tl_dec: "DIC",

    
    proj_title: "Proyectos del Sistema",
    proj_filter_all: "Todos",
    proj_btn_view: "[+] VER",
    proj_btn_code: "[B] REPO",
    proj_back: "← Volver a proyectos",
    proj_gallery: "Galería de Imágenes:",

    inv_short: "Plataforma SaaS integral de gestión de inventarios y punto de venta con IA Multimodal (Google Gemini 2.5 Flash).",
    lira_short: "Asistente de IA asíncrono construido con Node.js, la API de Google Gemini y bases de datos MongoDB.",
    uhc_short: "Plataforma Full-Stack para la gestión de torneos de e-sports y eventos interactivos de Minecraft.",
    cash_short: "App móvil en Flutter para gestión de finanzas personales y compartidas con un asistente IA (Gemini).",

    
    proj_det_tech: "Tecnologías utilizadas",
    proj_det_tech_review: "Tecnologías en revisión",
    proj_det_about: "Sobre el proyecto",
    proj_det_file: "Archivo",
    proj_det_edit: "Edición",
    proj_det_view: "Ver",
    proj_det_help: "Ayuda",
    proj_det_features: "Características",
    proj_det_repo: "* Ver repositorio",
    proj_det_prev: "ATRÁS",
    proj_det_next: "SIGUIENTE",
    proj_det_preview: "Vista preliminar del proyecto",
    proj_det_docs_wip: "La documentación de este proyecto está en construcción.",
    proj_det_feat_wip: "Características pendientes de documentar.",

    
    inv_desc: "Inventory 360 es una solución de software moderna diseñada para resolver la desconexión tradicional entre el control de bodega, el piso de ventas y la toma de decisiones gerenciales. Integrando capacidades avanzadas de Inteligencia Artificial Cognitiva (Google Gemini), la plataforma trasciende el simple registro transaccional, convirtiendo el inventario en un asistente activo que predice la demanda a 60 días, alerta de forma temprana sobre quiebres de stock y permite la ejecución de tareas mediante lenguaje natural hablado o escrito.",
    inv_f1: "Arquitectura Cloud Omnicanal: Infraestructura Serverless utilizando Node.js y MongoDB, diseñada para escalabilidad horizontal y alta disponibilidad.",
    inv_f2: "Interfaz Conversacional AI: Chatbot impulsado por Google Gemini que entiende consultas de inventario en lenguaje natural (ej. '¿Tenemos tenis rojos para correr en talla 9?').",
    inv_f3: "Analítica Predictiva: Modelos de Machine Learning para pronosticar el agotamiento de stock y generar alertas automáticas de reabastecimiento.",
    inv_f4: "Punto de Venta (POS): Catálogo visual, carrito dinámico y checkout rápido con deducción atómica de stock.",
    inv_f5: "Arquitectura de Roles (RBAC): Control de acceso segmentado entre Administrador y Vendedor/POS.",

    
    lira_desc: "Lira es un servicio de backend robusto que opera como un agente inteligente headless integrado directamente con WhatsApp como canal de comunicación principal. A través de whatsapp-web.js, Lira escucha mensajes entrantes en tiempo real, los enruta hacia la lógica de inteligencia artificial y devuelve respuestas contextualizadas, todo sin necesidad de interfaz gráfica.\n\nMucho más que un simple bot conversacional, Lira funciona como una arquitectura de backend proactiva capaz de gestionar la programación de tareas complejas, el seguimiento del estado emocional, el análisis de intenciones mediante lenguaje natural y el cambio dinámico de personalidad de la IA según el usuario que interactúa.",
    lira_f1: "Contexto Dinámico Multipersonaje: Cambia dinámicamente los system prompts y reglas de procesamiento basándose en el usuario entrante. Contextos aislados, historial independiente por usuario y respuestas personalizadas por contacto.",
    lira_f2: "Programación en Lenguaje Natural: Emplea chrono-node para extraer datos temporales de mensajes en español. Soporta recordatorios únicos y recurrentes con manejo correcto de zonas horarias UTC.",
    lira_f3: "Workers en Segundo Plano: Bucles de validación recursivos que consultan continuamente la base de datos en busca de eventos programados, generando automáticamente resúmenes y enviando notificaciones proactivas vía WhatsApp.",
    lira_f4: "Análisis de Sentimientos con LLM: Diario emocional que consulta usuarios vía WhatsApp, procesa respuestas con Gemini en JSON estructurado, y genera resúmenes semanales automatizados.",
    lira_f5: "Procesamiento Multimodal: Recibe y procesa imágenes y notas de voz. Las imágenes se analizan con Gemini Vision y los audios se transcriben automáticamente antes de ser procesados por el pipeline NLU.",
    lira_f6: "Reintentos con Backoff Exponencial: Sistema de retry robusto con backoff exponencial para manejar errores 503 del modelo de IA.",
    lira_f7: "Gestión de Listas Inteligente: CRUD completo de listas temáticas vía lenguaje natural: agregar ítems, ver listas, borrar ítems individuales, eliminar listas completas.",
    lira_f8: "Router de Intenciones NLU: Clasificador de intenciones zero-shot con Gemini que analiza mensajes junto con el historial de contexto para determinar la acción correcta entre 10+ intenciones posibles.",

    
    uhc_desc: "UHC NOVA es un sistema avanzado de gestión de torneos diseñado para automatizar y administrar eventos competitivos de e-sports, específicamente para la modalidad Ultra Hardcore (UHC). Actúa como una solución completa que integra un panel de control interactivo para los participantes y un panel de administración seguro para los organizadores, permitiendo el control total sobre los eventos, los registros de equipos y las métricas en tiempo real.\n\nArquitectura y Tecnologías:\nEl proyecto está construido bajo estándares de Clean Code, una arquitectura cliente-servidor desacoplada y orientada a servicios (SaaS).\nEn el Frontend utiliza React, Vite y Tailwind CSS para una SPA rápida y responsiva, apoyada con Motion y Radix para micro-animaciones fluidas y una experiencia premium. El Backend está desarrollado con Node.js y Express, proveyendo una API RESTful de alto rendimiento. Para la Base de Datos se implementó Prisma ORM con SQLite, diseñado para escalar a PostgreSQL, y cuenta con un sistema de Ciberseguridad robusto utilizando JWT (JSON Web Tokens) y encriptación Bcrypt.",
    uhc_f1: "Sistema Avanzado de Registro y Jerarquización de Equipos: Creación de 'Escuadrones' de 4 jugadores con roles de Capitán y Recluta, con validación automática de integridad.",
    uhc_f2: "Terminal de 'Alto Mando' (Back-office): Panel administrativo seguro para monitorear métricas, gestionar fases del torneo y auditar comprobantes.",
    uhc_f3: "Dashboards en Tiempo Real (Telemetría): Interfaces dinámicas con cuenta regresiva, estado del torneo y 'mecánicas' activas en el evento.",
    uhc_f4: "Flujos de Autenticación Segura: Acceso protegido basado en roles. Solo capitanes o administradores pueden interactuar con funciones de gestión.",

    
    cash_desc: "Esta es una aplicación móvil desarrollada en Flutter orientada a la gestión de finanzas personales, con la capacidad de extenderse para manejar finanzas compartidas en pareja. La aplicación ayuda a los usuarios a llevar un control estricto de su presupuesto, ingresos, gastos y metas financieras. Cuenta con un diseño amigable de estilo pastel y un asistente impulsado por inteligencia artificial (Gemini) para brindar resúmenes y consejos personalizados.\n\nArquitectura y Tecnologías:\nEl proyecto está estructurado de manera modular para garantizar escalabilidad y facilidad de mantenimiento utilizando Flutter (Dart), Riverpod para la gestión del estado, y Firebase (Authentication, Cloud Firestore) como backend. La IA está integrada con Google Generative AI (Gemini API) y se utilizan fl_chart para gráficos y flutter_local_notifications para notificaciones locales.\n\nJustificación Técnica:\nLa elección de Flutter como framework principal permite construir un producto de alta calidad en múltiples plataformas utilizando una única base de código. La utilización de Firebase proporciona almacenamiento y sincronización de datos en tiempo real, vital para una app financiera que se usa a diario.",
    cash_f1: "Autenticación Sencilla: Sistema de inicio de sesión fácil que automáticamente mapea nombres de usuarios genéricos.",
    cash_f2: "Panel de Control (Dashboard): Vista panorámica de las finanzas con gráficos de dona para el control del presupuesto.",
    cash_f3: "Gestión de Transacciones: Registro de ingresos y gastos diarios organizados por categorías (individual o compartida).",
    cash_f4: "Presupuesto Mensual: Definición y seguimiento de topes de gastos fijos y variables.",
    cash_f5: "Metas de Ahorro: Seguimiento interactivo para objetivos a largo plazo (ej. Casa, Viaje).",
    cash_f6: "Asesor Financiero IA (Gemini): Lectura del estado de cuenta y consejos dinámicos o alertas ante desvíos de presupuesto.",

    
    tech_title: "Tecnologías",
    tech_lang: "Lenguajes",
    tech_lang_desc: "La base de todo con lo que trabajo.",
    tech_fw: "Frameworks",
    tech_fw_desc: "Aceleradores para crear software moderno y adaptable.",
    tech_db: "Bases de Datos",
    tech_db_desc: "Almacenamiento seguro y estructurado.",
    tech_tools: "Herramientas",
    tech_tools_desc: "Mis aliadas del día a día.",

    
    contact_title: "Conexión Directa",
    contact_email_title: "Correo",
    contact_email_btn: "Enviar correo",
    contact_github_btn: "Visitar perfil",
    contact_linkedin_btn: "Ver perfil",

    
    sep_projects: "C:\\Archivos_de_programa\\Proyectos",
    sep_tech: "C:\\Archivos_de_programa\\Tecnologías",
    sep_contact: "C:\\Archivos_de_programa\\Contacto",
  }
};
