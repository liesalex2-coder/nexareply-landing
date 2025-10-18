import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fr: {
      company: "Entreprise",
      legal: "Légal",
      contact: "Contact",
      aboutUs: "À propos",
      pricing: "Tarifs",
      howItWorks: "Comment ça marche",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      rights: "© 2025 Nexa Reply. Tous droits réservés.",
      madeWith: "Fait avec ❤️ pour les créateurs de contenu"
    },
    en: {
      company: "Company",
      legal: "Legal",
      contact: "Contact",
      aboutUs: "About Us",
      pricing: "Pricing",
      howItWorks: "How It Works",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2025 Nexa Reply. All rights reserved.",
      madeWith: "Made with ❤️ for content creators"
    },
    es: {
      company: "Empresa",
      legal: "Legal",
      contact: "Contacto",
      aboutUs: "Sobre Nosotros",
      pricing: "Precios",
      howItWorks: "Cómo Funciona",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      rights: "© 2025 Nexa Reply. Todos los derechos reservados.",
      madeWith: "Hecho con ❤️ para creadores de contenido"
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Logo & Description */}
          <div className={styles.footerColumn}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🤖</span>
              <span className={styles.logoText}>Nexa Reply</span>
            </div>
            <p className={styles.description}>{t.madeWith}</p>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <h4>{t.company}</h4>
            <ul>
              <li><a href="#how-it-works">{t.howItWorks}</a></li>
              <li><a href="#pricing">{t.pricing}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.footerColumn}>
            <h4>{t.legal}</h4>
            <ul>
              <li><Link href="/privacy-policy">{t.privacy}</Link></li>
              <li><Link href="/terms-of-service">{t.terms}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h4>{t.contact}</h4>
            <ul>
              <li><a href="mailto:hello@nexareply.com">hello@nexareply.com</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}