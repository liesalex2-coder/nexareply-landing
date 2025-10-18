import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Legal.module.css';

export default function PrivacyPolicy() {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 16 octobre 2025",
      backHome: "← Retour à l'accueil",
      tos: "Conditions d'Utilisation",
      youtubeNotice: "Avis sur les Services API YouTube :",
      youtubeNoticeText: "Nexa Reply utilise les Services API de YouTube pour fournir ses fonctionnalités principales. En utilisant Nexa Reply, vous acceptez également d'être lié par les ",
      youtubeTerms: "Conditions d'Utilisation de YouTube",
      googlePrivacy: "Politique de Confidentialité de Google",
      sections: {
        intro: {
          title: "1. Introduction",
          content: "Bienvenue sur Nexa Reply (« nous », « notre » ou « nos »). Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre service de gestion de commentaires YouTube alimenté par l'IA."
        }
      }
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 16, 2025",
      backHome: "← Back to Home",
      tos: "Terms of Service",
      youtubeNotice: "YouTube API Services Notice:",
      youtubeNoticeText: "Nexa Reply uses YouTube API Services to provide its core functionality. By using Nexa Reply, you are also agreeing to be bound by the ",
      youtubeTerms: "YouTube Terms of Service",
      googlePrivacy: "Google Privacy Policy",
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 16 de octubre de 2025",
      backHome: "← Volver al inicio",
      tos: "Términos de Servicio",
      youtubeNotice: "Aviso de Servicios API de YouTube:",
      youtubeNoticeText: "Nexa Reply utiliza los Servicios API de YouTube para proporcionar su funcionalidad principal. Al usar Nexa Reply, también acepta estar vinculado por los ",
      youtubeTerms: "Términos de Servicio de YouTube",
      googlePrivacy: "Política de Privacidad de Google",
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <>
      <Head>
        <title>{t.title} - Nexa Reply</title>
        <meta name="description" content="Privacy Policy for Nexa Reply - AI-powered YouTube comment management" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{t.title}</h1>
          <p className={styles.lastUpdated}>{t.lastUpdated}</p>
        </header>

        <div className={styles.highlightBox}>
          <p>
            <strong>{t.youtubeNotice}</strong> {t.youtubeNoticeText}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">{t.youtubeTerms}</a>
            {locale === 'en' ? ' and the ' : ' et la '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{t.googlePrivacy}</a>.
          </p>
        </div>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to Nexa Reply ("we," "our," or "us"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our AI-powered YouTube comment management service.</p>
          <p>We are committed to protecting your privacy and being transparent about our data practices. This policy complies with applicable data protection laws including GDPR, CCPA, and YouTube API Services Terms of Service.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address, name, and authentication credentials</li>
            <li><strong>Payment Information:</strong> Processed securely through our payment provider (we do not store credit card details)</li>
            <li><strong>Communication Data:</strong> Messages you send us through support channels</li>
          </ul>

          <h3>2.2 YouTube API Data</h3>
          <p>When you connect your YouTube account, we access and use the following data through the YouTube Data API v3:</p>
          <ul>
            <li><strong>Channel Information:</strong> Your YouTube channel ID, channel name, profile picture, and basic statistics</li>
            <li><strong>Comment Data:</strong> Comments on your videos including comment text, author information, timestamps, and video details</li>
            <li><strong>Authorization Data:</strong> OAuth tokens that allow us to access your YouTube data on your behalf</li>
          </ul>

          <h3>2.3 Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with our service, features used, and timestamps</li>
            <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
            <li><strong>Cookies and Similar Technologies:</strong> We use cookies, local storage, and similar technologies to maintain your session and improve user experience</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Core Service Functionality:</strong> To retrieve your YouTube comments and enable AI-powered reply generation</li>
            <li><strong>Authentication:</strong> To verify your identity and maintain secure access to your account</li>
            <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our features</li>
            <li><strong>Communication:</strong> To send you service updates, security alerts, and support messages</li>
            <li><strong>AI Processing:</strong> Comment text is processed by AI services to generate contextual replies</li>
            <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Share Your Information</h2>
          
          <h3>4.1 Third-Party Service Providers</h3>
          <p>We share your information with trusted third-party providers who help us operate our service:</p>
          <ul>
            <li><strong>AI Services:</strong> Comment data is sent to AI providers (OpenAI, Anthropic, or similar) to generate replies</li>
            <li><strong>Cloud Infrastructure:</strong> We use secure cloud hosting services to store and process data</li>
            <li><strong>Payment Processors:</strong> Payment information is handled by secure payment providers</li>
            <li><strong>Analytics Providers:</strong> To understand service usage and improve performance</li>
          </ul>

          <h3>4.2 YouTube/Google</h3>
          <p>When you use our service to post replies to YouTube, that data is sent to YouTube through the YouTube Data API v3 and is subject to Google's privacy policies.</p>

          <h3>4.3 No Sale of Personal Data</h3>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
        </section>

        <section>
          <h2>5. Your Rights and Choices</h2>
          
          <h3>5.1 Access and Control Your Data</h3>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct your information through account settings</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
            <li><strong>Data Portability:</strong> Request your data in a machine-readable format</li>
          </ul>

          <h3>5.2 Revoke YouTube Access</h3>
          <p>You can revoke Nexa Reply's access to your YouTube data at any time through:</p>
          <ul>
            <li>Our application settings (disconnect YouTube account)</li>
            <li>Google Security Settings: <a href="https://myaccount.google.com/connections?filters=3,4&hl=en" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/connections</a></li>
          </ul>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@nexareply.com">hello@nexareply.com</a></li>
            <li><strong>Website:</strong> <a href="https://www.nexareply.com">https://www.nexareply.com</a></li>
          </ul>
        </section>

        <div className={styles.highlightBox}>
          <p><strong>Important Links:</strong></p>
          <ul>
            <li><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><a href="https://myaccount.google.com/connections?filters=3,4&hl=en" target="_blank" rel="noopener noreferrer">Revoke Access (Google Security)</a></li>
          </ul>
        </div>

        <div className={styles.footerLink}>
          <p>
            <Link href="/">{t.backHome}</Link> | <Link href="/terms-of-service">{t.tos}</Link>
          </p>
        </div>
      </div>
    </>
  );
}