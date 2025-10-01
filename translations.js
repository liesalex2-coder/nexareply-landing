// translations.js

const translations = {
  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      pricing: "Tarifs",
      contact: "Contact"
    },
    meta: {
      title: "Nexa Reply - L'IA qui gère vos commentaires automatiquement",
      description: "Votre audience parle. Votre IA répond comme vous l'auriez fait. L'IA qui gère YouTube, Facebook et Instagram automatiquement."
    },
    hero: {
      title: "Votre audience parle.",
      titleHighlight: "Votre IA répond",
      titleEnd: "comme vous l'auriez fait.",
      subtitle: "L'IA qui gère vos commentaires YouTube, Facebook et Instagram pendant que vous vous concentrez sur l'essentiel.",
      subtitleBold: "Configuration en 2 minutes. Résultats immédiats.",
      stats: {
        speed: { number: "10x", label: "Plus rapide" },
        availability: { number: "24/7", label: "Disponible" },
        precision: { number: "98%", label: "Précision" }
      },
      banner: {
        title: "🎯 Enfin ! Un assistant IA qui comprend votre communauté",
        text: "Plus de robots stupides qui répondent n'importe quoi. Nexa Reply apprend votre style, respecte vos règles et ne répond que quand c'est pertinent.",
        badges: {
          secure: "Connexion sécurisée OAuth",
          noData: "Aucune donnée stockée",
          control: "Contrôle total"
        }
      },
      cta: {
        button: "🔥 50% de réduction les 6 premiers mois - 50 premières personnes",
        explanation: "Produit en phase de test - Contactez-nous pour réserver votre place parmi les 50 premiers et être averti du lancement"
      }
    },
    howItWorks: {
      title: "🚀 Nexa Reply en 3 étapes",
      subtitle: "Configuration en moins de 2 minutes. Résultats immédiats.",
      steps: {
        step1: {
          time: "30 secondes",
          number: "1",
          title: "🔗 Connectez vos comptes",
          description: "YouTube, Facebook ou Instagram en 1 clic sécurisé",
          features: [
            "Connexion OAuth sécurisée",
            "Multi-comptes supportés",
            "Aucun mot de passe partagé"
          ]
        },
        step2: {
          time: "1 minute",
          number: "2",
          title: "🎨 Configurez votre assistant",
          description: "Personnalisez l'IA pour qu'elle réponde exactement comme vous",
          features: [
            "<strong>Ton: </strong> Amical, professionnel, fun, sarcastique...",
            "<strong>Langues:</strong> Principale + 2 supplémentaires max",
            "<strong>Délai:</strong> Instantané, 5min, 30min, 1h...",
            "<strong>Horaires:</strong> 24/7 ou créneaux personnalisés",
            "<strong>Règles:</strong> &quot;Jamais de conseils médicaux&quot;, &quot;Rediriger collabs vers email&quot;"
          ]
        },
        step3: {
          time: "Automatique",
          number: "3",
          title: "🤖 L'IA travaille pour vous",
          description: "Réponses automatiques 24/7 pendant que vous créez du contenu",
          features: [
            "Analyse vos anciennes réponses pour reproduire votre style",
            "Gestion automatique des remerciements et questions simples",
            "Validation requise pour les cas complexes",
            "Dashboard temps réel pour tout contrôler"
          ]
        }
      },
      result: {
        title: "Résultat : 10x plus de temps pour vous concentrer sur l'essentiel",
        description: "Votre audience reçoit des réponses personnalisées 24/7. Votre communauté reste engagée, vous gardez du temps pour ce qui compte vraiment."
      }
    },
    features: {
      title: "🎯 Fonctionnalités avancées",
      subtitle: "Des outils professionnels pour gérer votre automatisation",
      reporting: {
        icon: "📊",
        title: "Reporting & Analytics",
        description: "Pilotez votre automatisation",
        list: [
          "Suivez vos réponses envoyées et temps de réponse moyen de l'IA",
          "Visualisez l'évolution sur 30 jours avec graphiques interactifs",
          "Consultez l'historique complet : commentaire original, réponse générée, vidéo concernée",
          "Exportez vos données en CSV avec filtres personnalisés",
          "Gérez vos quotas : utilisation en temps réel et alertes à 80%"
        ]
      },
      workspace: {
        icon: "👥",
        title: "Workspace",
        description: "Multi-comptes et gestion d'équipe",
        list: [
          "Gérez plusieurs chaînes YouTube avec isolation totale des données",
          "Invitez votre équipe avec 4 niveaux de permissions (Propriétaire, Admin, Membre, Visiteur)",
          "Contrôlez qui peut modifier les paramètres IA, valider les réponses ou consulter",
          "Centralisez toutes vos marques dans une interface unique"
        ]
      }
    },
    pricing: {
      title: "💰 Pricing simple et transparent",
      subtitle: "Choisissez le plan qui correspond à vos besoins",
      solo: {
        title: "📱 Plan Solo",
        description: "Parfait pour YouTube uniquement",
        starter: {
          name: "🚀 Starter",
          price: "9€",
          period: "/mois",
          description: "Idéal pour démarrer avec l'IA",
          features: [
            "YouTube uniquement",
            "1 compte connecté",
            "100 réponses automatiques/mois",
            "Configuration de base",
            "1 langue"
          ]
        },
        standard: {
          name: "⭐ Standard",
          price: "29€",
          period: "/mois",
          description: "Pour une utilisation régulière sur YouTube",
          features: [
            "YouTube uniquement",
            "2 comptes connectés",
            "500 réponses automatiques/mois",
            "IA avancée + règles personnalisées",
            "2 langues configurables",
            "Analytics de base"
          ]
        },
        premium: {
          name: "🚀 Premium",
          price: "59€",
          period: "/mois",
          description: "Pour une utilisation intensive sur YouTube",
          features: [
            "YouTube uniquement",
            "5 comptes connectés",
            "1200 réponses automatiques/mois",
            "Toutes les fonctionnalités IA",
            "3 langues configurables",
            "Analytics avancés",
            "Support prioritaire"
          ]
        }
      },
      multi: {
        title: "🌐 Plan Multi",
        description: "YouTube + Facebook + Instagram",
        free: {
          name: "🚀 Starter",
          price: "15€",
          period: "/mois",
          description: "Testez sur les 3 plateformes principales",
          features: [
            "3 plateformes (YouTube + Facebook + Instagram)",
            "1 compte par plateforme",
            "100 réponses automatiques/mois (total)",
            "Configuration de base",
            "1 langue"
          ]
        },
        standard: {
          name: "⭐ Standard",
          price: "39€",
          period: "/mois",
          description: "Automatisation complète multi-plateformes",
          features: [
            "3 plateformes (YouTube + Facebook + Instagram)",
            "2 comptes par plateforme",
            "500 réponses automatiques/mois (total)",
            "IA avancée + règles personnalisées",
            "3 langues configurables",
            "Analytics détaillés",
            "Horaires personnalisés"
          ],
          popular: "🔥 Plus populaire"
        },
        premium: {
          name: "👑 Premium",
          price: "79€",
          period: "/mois",
          description: "Pour les agences et équipes",
          features: [
            "3 plateformes (YouTube + Facebook + Instagram)",
            "5 comptes par plateforme",
            "1200 réponses automatiques/mois (total)",
            "Gestion d'équipe (2 sièges)",
            "Export analytics",
            "Modèles personnalisés",
            "Support dédié"
          ]
        }
      }
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Une question ? Une suggestion ? Nous sommes là pour vous aider.",
      info: {
        title: "Informations de contact",
        email: "Email :",
        emailValue: "hello@nexareply.com"
      },
      form: {
        title: "Envoyez-nous un message",
        name: "Nom complet",
        email: "Email",
        message: "Message",
        placeholder: "Décrivez votre demande...",
        submit: "Envoyer le message"
      }
    }
  },
  
  en: {
    nav: {
      howItWorks: "How It Works",
      pricing: "Pricing",
      contact: "Contact"
    },
    meta: {
      title: "Nexa Reply - AI That Manages Your Comments Automatically",
      description: "Your audience speaks. Your AI replies like you would have. The AI that handles YouTube, Facebook and Instagram automatically."
    },
    hero: {
      title: "Your audience speaks.",
      titleHighlight: "Your AI replies",
      titleEnd: "like you would have.",
      subtitle: "The AI that manages your YouTube, Facebook and Instagram comments while you focus on what matters.",
      subtitleBold: "2-minute setup. Instant results.",
      stats: {
        speed: { number: "10x", label: "Faster" },
        availability: { number: "24/7", label: "Available" },
        precision: { number: "98%", label: "Accuracy" }
      },
      banner: {
        title: "🎯 Finally! An AI assistant that understands your community",
        text: "No more stupid bots that reply nonsense. Nexa Reply learns your style, respects your rules and only replies when relevant.",
        badges: {
          secure: "Secure OAuth Connection",
          noData: "No Data Stored",
          control: "Full Control"
        }
      },
      cta: {
        button: "🔥 50% Off First 6 Months - First 50 People",
        explanation: "Product in beta - Contact us to reserve your spot among the first 50 and be notified of the launch"
      }
    },
    howItWorks: {
      title: "🚀 Nexa Reply in 3 Steps",
      subtitle: "Setup in less than 2 minutes. Instant results.",
      steps: {
        step1: {
          time: "30 seconds",
          number: "1",
          title: "🔗 Connect Your Accounts",
          description: "YouTube, Facebook or Instagram in 1 secure click",
          features: [
            "Secure OAuth connection",
            "Multi-account supported",
            "No password sharing"
          ]
        },
        step2: {
          time: "1 minute",
          number: "2",
          title: "🎨 Configure Your Assistant",
          description: "Customize the AI to reply exactly like you",
          features: [
            "<strong>Tone:</strong> Friendly, professional, fun, sarcastic...",
            "<strong>Languages:</strong> Main + 2 additional max",
            "<strong>Delay:</strong> Instant, 5min, 30min, 1h...",
            "<strong>Schedule:</strong> 24/7 or custom time slots",
            "<strong>Rules:</strong> &quot;No medical advice&quot;, &quot;Redirect collabs to email&quot;"
          ]
        },
        step3: {
          time: "Automatic",
          number: "3",
          title: "🤖 AI Works For You",
          description: "Automatic 24/7 replies while you create content",
          features: [
            "Analyzes your past replies to reproduce your style",
            "Automatic handling of thanks and simple questions",
            "Validation required for complex cases",
            "Real-time dashboard to control everything"
          ]
        }
      },
      result: {
        title: "Result: 10x more time to focus on what matters",
        description: "Your audience receives personalized 24/7 replies. Your community stays engaged, you keep time for what really matters."
      }
    },
    features: {
      title: "🎯 Advanced Features",
      subtitle: "Professional tools to manage your automation",
      reporting: {
        icon: "📊",
        title: "Reporting & Analytics",
        description: "Monitor your automation",
        list: [
          "Track sent replies and AI average response time",
          "Visualize 30-day evolution with interactive charts",
          "Check complete history: original comment, generated reply, related video",
          "Export your data to CSV with custom filters",
          "Manage your quotas: real-time usage and 80% alerts"
        ]
      },
      workspace: {
        icon: "👥",
        title: "Workspace",
        description: "Multi-account and team management",
        list: [
          "Manage multiple YouTube channels with complete data isolation",
          "Invite your team with 4 permission levels (Owner, Admin, Member, Visitor)",
          "Control who can modify AI settings, validate replies or view only",
          "Centralize all your brands in a single interface"
        ]
      }
    },
    pricing: {
      title: "💰 Simple and Transparent Pricing",
      subtitle: "Choose the plan that fits your needs",
      solo: {
        title: "📱 Solo Plan",
        description: "Perfect for YouTube only",
        starter: {
          name: "🚀 Starter",
          price: "€9",
          period: "/month",
          description: "Ideal to test AI on your comments",
          features: [
            "YouTube only",
            "1 connected account",
            "100 automatic replies/month",
            "Basic configuration",
            "1 language"
          ]
        },
        standard: {
          name: "⭐ Standard",
          price: "€29",
          period: "/month",
          description: "For regular YouTube usage",
          features: [
            "YouTube only",
            "2 connected accounts",
            "500 automatic replies/month",
            "Advanced AI + custom rules",
            "2 configurable languages",
            "Basic analytics"
          ]
        },
        premium: {
          name: "🚀 Premium",
          price: "€59",
          period: "/month",
          description: "For intensive YouTube usage",
          features: [
            "YouTube only",
            "5 connected accounts",
            "1200 automatic replies/month",
            "All AI features",
            "3 configurable languages",
            "Advanced analytics",
            "Priority support"
          ]
        }
      },
      multi: {
        title: "🌐 Multi Plan",
        description: "YouTube + Facebook + Instagram",
        starter: {
          name: "🚀 Starter",
          price: "€15",
          period: "/month",
          description: "Test on the 3 main platforms",
          features: [
            "3 platforms (YouTube + Facebook + Instagram)",
            "1 account per platform",
            "100 automatic replies/month (total)",
            "Basic configuration",
            "1 language"
          ]
        },
        standard: {
          name: "⭐ Standard",
          price: "€39",
          period: "/month",
          description: "Complete multi-platform automation",
          features: [
            "3 platforms (YouTube + Facebook + Instagram)",
            "2 accounts per platform",
            "500 automatic replies/month (total)",
            "Advanced AI + custom rules",
            "3 configurable languages",
            "Detailed analytics",
            "Custom schedules"
          ],
          popular: "🔥 Most Popular"
        },
        premium: {
          name: "👑 Premium",
          price: "€79",
          period: "/month",
          description: "For agencies and teams",
          features: [
            "3 platforms (YouTube + Facebook + Instagram)",
            "5 accounts per platform",
            "1200 automatic replies/month (total)",
            "Team management (2 seats)",
            "Analytics export",
            "Custom templates",
            "Dedicated support"
          ]
        }
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "A question? A suggestion? We're here to help.",
      info: {
        title: "Contact Information",
        email: "Email:",
        emailValue: "hello@nexareply.com"
      },
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        email: "Email",
        message: "Message",
        placeholder: "Describe your request...",
        submit: "Send Message"
      }
    }
  },
  
  es: {
    nav: {
      howItWorks: "Cómo Funciona",
      pricing: "Precios",
      contact: "Contacto"
    },
    meta: {
      title: "Nexa Reply - IA Que Gestiona Tus Comentarios Automáticamente",
      description: "Tu audiencia habla. Tu IA responde como tú lo habrías hecho. La IA que gestiona YouTube, Facebook e Instagram automáticamente."
    },
    hero: {
      title: "Tu audiencia habla.",
      titleHighlight: "Tu IA responde",
      titleEnd: "como tú lo habrías hecho.",
      subtitle: "La IA que gestiona tus comentarios de YouTube, Facebook e Instagram mientras te concentras en lo esencial.",
      subtitleBold: "Configuración en 2 minutos. Resultados inmediatos.",
      stats: {
        speed: { number: "10x", label: "Más rápido" },
        availability: { number: "24/7", label: "Disponible" },
        precision: { number: "98%", label: "Precisión" }
      },
      banner: {
        title: "🎯 ¡Por fin! Un asistente IA que entiende tu comunidad",
        text: "Se acabaron los bots estúpidos que responden tonterías. Nexa Reply aprende tu estilo, respeta tus reglas y solo responde cuando es relevante.",
        badges: {
          secure: "Conexión OAuth Segura",
          noData: "Sin Datos Almacenados",
          control: "Control Total"
        }
      },
      cta: {
        button: "🔥 50% de Descuento los Primeros 6 Meses - Primeras 50 Personas",
        explanation: "Producto en fase beta - Contáctanos para reservar tu lugar entre los primeros 50 y ser notificado del lanzamiento"
      }
    },
    howItWorks: {
      title: "🚀 Nexa Reply en 3 Pasos",
      subtitle: "Configuración en menos de 2 minutos. Resultados inmediatos.",
      steps: {
        step1: {
          time: "30 segundos",
          number: "1",
          title: "🔗 Conecta Tus Cuentas",
          description: "YouTube, Facebook o Instagram en 1 clic seguro",
          features: [
            "Conexión OAuth segura",
            "Multi-cuentas soportadas",
            "Sin contraseñas compartidas"
          ]
        },
        step2: {
          time: "1 minuto",
          number: "2",
          title: "🎨 Configura Tu Asistente",
          description: "Personaliza la IA para que responda exactamente como tú",
          features: [
            "<strong>Tono:</strong> Amigable, profesional, divertido, sarcástico...",
            "<strong>Idiomas:</strong> Principal + 2 adicionales máx",
            "<strong>Retraso:</strong> Instantáneo, 5min, 30min, 1h...",
            "<strong>Horarios:</strong> 24/7 o franjas personalizadas",
            "<strong>Reglas:</strong> &quot;Sin consejos médicos&quot;, &quot;Redirigir colaboraciones al email&quot;"
          ]
        },
        step3: {
          time: "Automático",
          number: "3",
          title: "🤖 La IA Trabaja Para Ti",
          description: "Respuestas automáticas 24/7 mientras creas contenido",
          features: [
            "Analiza tus respuestas anteriores para reproducir tu estilo",
            "Gestión automática de agradecimientos y preguntas simples",
            "Validación requerida para casos complejos",
            "Dashboard en tiempo real para controlarlo todo"
          ]
        }
      },
      result: {
        title: "Resultado: 10x más tiempo para concentrarte en lo esencial",
        description: "Tu audiencia recibe respuestas personalizadas 24/7. Tu comunidad permanece comprometida, tú guardas tiempo para lo que realmente importa."
      }
    },
    features: {
      title: "🎯 Funcionalidades Avanzadas",
      subtitle: "Herramientas profesionales para gestionar tu automatización",
      reporting: {
        icon: "📊",
        title: "Reporting & Analytics",
        description: "Controla tu automatización",
        list: [
          "Sigue tus respuestas enviadas y tiempo de respuesta promedio de la IA",
          "Visualiza la evolución de 30 días con gráficos interactivos",
          "Consulta el historial completo: comentario original, respuesta generada, video relacionado",
          "Exporta tus datos en CSV con filtros personalizados",
          "Gestiona tus cuotas: uso en tiempo real y alertas al 80%"
        ]
      },
      workspace: {
        icon: "👥",
        title: "Workspace",
        description: "Multi-cuentas y gestión de equipo",
        list: [
          "Gestiona varios canales de YouTube con aislamiento total de datos",
          "Invita a tu equipo con 4 niveles de permisos (Propietario, Admin, Miembro, Visitante)",
          "Controla quién puede modificar configuración IA, validar respuestas o solo consultar",
          "Centraliza todas tus marcas en una interfaz única"
        ]
      }
    },
    pricing: {
      title: "💰 Precios Simples y Transparentes",
      subtitle: "Elige el plan que se adapta a tus necesidades",
      solo: {
        title: "📱 Plan Solo",
        description: "Perfecto solo para YouTube",
        starter: {
          name: "🚀 Starter",
          price: "9€",
          period: "/mes",
          description: "Ideal para probar la IA en tus comentarios",
          features: [
            "Solo YouTube",
            "1 cuenta conectada",
            "100 respuestas automáticas/mes",
            "Configuración básica",
            "1 idioma"
          ]
        },
        standard: {
          name: "⭐ Estándar",
          price: "29€",
          period: "/mes",
          description: "Para uso regular en YouTube",
          features: [
            "Solo YouTube",
            "2 cuentas conectadas",
            "500 respuestas automáticas/mes",
            "IA avanzada + reglas personalizadas",
            "2 idiomas configurables",
            "Analíticas básicas"
          ]
        },
        premium: {
          name: "🚀 Premium",
          price: "59€",
          period: "/mes",
          description: "Para uso intensivo en YouTube",
          features: [
            "Solo YouTube",
            "5 cuentas conectadas",
            "1200 respuestas automáticas/mes",
            "Todas las funcionalidades IA",
            "3 idiomas configurables",
            "Analíticas avanzadas",
            "Soporte prioritario"
          ]
        }
      },
      multi: {
        title: "🌐 Plan Multi",
        description: "YouTube + Facebook + Instagram",
        starter: {
          name: "🚀 Starter",
          price: "15€",
          period: "/mes",
          description: "Prueba en las 3 plataformas principales",
          features: [
            "3 plataformas (YouTube + Facebook + Instagram)",
            "1 cuenta por plataforma",
            "100 respuestas automáticas/mes (total)",
            "Configuración básica",
            "1 idioma"
          ]
        },
        standard: {
          name: "⭐ Estándar",
          price: "39€",
          period: "/mes",
          description: "Automatización completa multiplataforma",
          features: [
            "3 plataformas (YouTube + Facebook + Instagram)",
            "2 cuentas por plataforma",
            "500 respuestas automáticas/mes (total)",
            "IA avanzada + reglas personalizadas",
            "3 idiomas configurables",
            "Analíticas detalladas",
            "Horarios personalizados"
          ],
          popular: "🔥 Más Popular"
        },
        premium: {
          name: "👑 Premium",
          price: "79€",
          period: "/mes",
          description: "Para agencias y equipos",
          features: [
            "3 plataformas (YouTube + Facebook + Instagram)",
            "5 cuentas por plataforma",
            "1200 respuestas automáticas/mes (total)",
            "Gestión de equipo (2 puestos)",
            "Exportar analíticas",
            "Plantillas personalizadas",
            "Soporte dedicado"
          ]
        }
      }
    },
    contact: {
      title: "Contáctanos",
      subtitle: "¿Una pregunta? ¿Una sugerencia? Estamos aquí para ayudarte.",
      info: {
        title: "Información de Contacto",
        email: "Email:",
        emailValue: "hello@nexareply.com"
      },
      form: {
        title: "Envíanos un Mensaje",
        name: "Nombre Completo",
        email: "Email",
        message: "Mensaje",
        placeholder: "Describe tu solicitud...",
        submit: "Enviar Mensaje"
      }
    }
  }
};

export default translations;