import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Legal.module.css';

export default function TermsOfService() {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    fr: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : 16 octobre 2025",
      backHome: "← Retour à l'accueil",
      privacy: "Politique de Confidentialité",
      ytAgreement: "Accord sur les Conditions d'Utilisation de YouTube :",
      ytAgreementText: "En utilisant Nexa Reply, vous acceptez d'être lié par les ",
      ytTerms: "Conditions d'Utilisation de YouTube",
      ytAgreementEnd: ". Nexa Reply utilise les Services API de YouTube, et votre utilisation de notre service constitue votre acceptation des conditions et politiques de YouTube."
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: October 16, 2025",
      backHome: "← Back to Home",
      privacy: "Privacy Policy",
      ytAgreement: "YouTube Terms of Service Agreement:",
      ytAgreementText: "By using Nexa Reply, you agree to be bound by the ",
      ytTerms: "YouTube Terms of Service",
      ytAgreementEnd: ". Nexa Reply uses YouTube API Services, and your use of our service constitutes your acceptance of YouTube's terms and policies."
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 16 de octubre de 2025",
      backHome: "← Volver al inicio",
      privacy: "Política de Privacidad",
      ytAgreement: "Acuerdo de Términos de Servicio de YouTube:",
      ytAgreementText: "Al usar Nexa Reply, acepta estar vinculado por los ",
      ytTerms: "Términos de Servicio de YouTube",
      ytAgreementEnd: ". Nexa Reply utiliza los Servicios API de YouTube, y su uso de nuestro servicio constituye su aceptación de los términos y políticas de YouTube."
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <>
      <Head>
        <title>{t.title} - Nexa Reply</title>
        <meta name="description" content="Terms of Service for Nexa Reply - AI-powered YouTube comment management" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{t.title}</h1>
          <p className={styles.lastUpdated}>{t.lastUpdated}</p>
        </header>

        <div className={styles.importantBox}>
          <p>
            <strong>{t.ytAgreement}</strong> {t.ytAgreementText}
            <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">{t.ytTerms}</a>
            {t.ytAgreementEnd}
          </p>
        </div>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>Welcome to Nexa Reply. These Terms of Service ("Terms") govern your access to and use of Nexa Reply's website, applications, and services (collectively, the "Service").</p>
          <p>By accessing or using our Service, you agree to be bound by these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree to these Terms, you may not use the Service.</p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>Nexa Reply is an AI-powered YouTube comment management platform that enables content creators to:</p>
          <ul>
            <li>Connect their YouTube channel via OAuth authentication</li>
            <li>View and manage comments from their YouTube videos</li>
            <li>Generate AI-powered replies to comments</li>
            <li>Post approved replies directly to YouTube</li>
          </ul>
          <p>The Service uses YouTube Data API v3 to access your YouTube channel data and post comments on your behalf.</p>
        </section>

        <section>
          <h2>3. Third-Party Terms and Services</h2>
          <h3>3.1 YouTube Terms of Service</h3>
          <p><strong>IMPORTANT:</strong> By using Nexa Reply, you expressly agree to be bound by the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>. This is a requirement of our use of YouTube API Services.</p>
          <p>You acknowledge that:</p>
          <ul>
            <li>Your use of YouTube data through Nexa Reply is subject to YouTube's Terms of Service</li>
            <li>YouTube may modify, suspend, or discontinue their API at any time</li>
            <li>We are not responsible for changes to YouTube's services or policies</li>
          </ul>

          <h3>3.2 Google Privacy Policy</h3>
          <p>Your YouTube data is subject to the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. Please review Google's privacy practices to understand how your data is handled.</p>
        </section>

        <section>
          <h2>4. Account Registration and Security</h2>
          <h3>4.1 Account Creation</h3>
          <p>To use Nexa Reply, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Have a valid YouTube channel</li>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
          </ul>

          <h3>4.2 YouTube Authentication</h3>
          <p>You grant Nexa Reply permission to access your YouTube data through OAuth authentication. You may revoke this access at any time through:</p>
          <ul>
            <li>Nexa Reply account settings</li>
            <li>Google Security Settings: <a href="https://myaccount.google.com/connections?filters=3,4&hl=en" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/connections</a></li>
          </ul>
        </section>

        <section>
          <h2>5. Acceptable Use Policy</h2>
          <h3>5.1 Permitted Use</h3>
          <p>You may use the Service only for lawful purposes and in accordance with these Terms.</p>

          <h3>5.2 Prohibited Activities</h3>
          <p>You agree NOT to:</p>
          <ul>
            <li>Violate any applicable laws or third-party rights</li>
            <li>Post spam, harassment, or illegal content</li>
            <li>Violate YouTube's Community Guidelines or Terms of Service</li>
            <li>Exceed rate limits or abuse the Service</li>
            <li>Use the service to generate misleading or harmful content</li>
            <li>Attempt to reverse engineer or compromise the Service</li>
          </ul>
        </section>

        <section>
          <h2>6. AI-Generated Content</h2>
          <div className={styles.highlightBox}>
            <p><strong>Important:</strong> You acknowledge that:</p>
            <ul>
              <li>AI-generated content may not always be accurate, appropriate, or error-free</li>
              <li>You are solely responsible for reviewing and approving all replies before posting</li>
              <li>You retain full editorial control and responsibility for all content posted through the Service</li>
              <li>Nexa Reply is not liable for any AI-generated content you choose to publish</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>7. Intellectual Property Rights</h2>
          <p>Nexa Reply and its original content, features, and functionality are owned by Nexa Reply and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
          <p>You retain all rights to your YouTube content and any content you create or post through the Service.</p>
        </section>

        <section>
          <h2>8. Disclaimer of Warranties</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
          <p>We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected.</p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXA REPLY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
        </section>

        <section>
          <h2>10. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to:</p>
          <ul>
            <li>Breach of these Terms</li>
            <li>Violation of YouTube's Terms of Service</li>
            <li>Fraudulent, abusive, or illegal activity</li>
            <li>At our sole discretion</li>
          </ul>
          <p>Upon termination, your right to use the Service will cease immediately. You may also terminate your account at any time by contacting us.</p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>For questions about these Terms, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@nexareply.com">hello@nexareply.com</a></li>
            <li><strong>Website:</strong> <a href="https://www.nexareply.com">https://www.nexareply.com</a></li>
          </ul>
          <p>We will respond to your inquiries within 30 days.</p>
        </section>

        <div className={styles.highlightBox}>
          <p><strong>Important:</strong> By using Nexa Reply, you agree to both these Terms and the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.</p>
        </div>

        <div className={styles.footerLink}>
          <p>
            <Link href="/">{t.backHome}</Link> | <Link href="/privacy-policy">{t.privacy}</Link>
          </p>
        </div>
      </div>
    </>
  );
}