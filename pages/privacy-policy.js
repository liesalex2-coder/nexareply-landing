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
            <li><strong>Account Information:</strong> Email address, name, and authentication credentials when you register for an account</li>
            <li><strong>Payment Information:</strong> Billing information processed securely through our third-party payment provider (Stripe). We do not store complete credit card details on our servers</li>
            <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send us through our contact forms or email</li>
            <li><strong>Configuration Data:</strong> Your AI assistant settings, tone preferences, language selections, and custom rules you create</li>
          </ul>

          <h3>2.2 YouTube API Data (API Data from YouTube API Services)</h3>
          <p>When you connect your YouTube account via OAuth 2.0, Nexa Reply accesses, collects, stores, and uses the following data through the YouTube Data API v3:</p>
          <ul>
            <li><strong>Channel Information:</strong> Your YouTube channel ID, channel name, channel description, profile picture, subscriber count, and public channel statistics</li>
            <li><strong>Video Information:</strong> Video titles, descriptions, IDs, publication dates, and public metadata of your uploaded videos</li>
            <li><strong>Comment Data:</strong> All comments on your videos including: comment text content, author names and channel IDs, timestamps, like counts, reply threads, and comment status (published/held for review)</li>
            <li><strong>Authorization Data:</strong> OAuth 2.0 access tokens and refresh tokens that allow us to access your YouTube data on your behalf. These tokens are encrypted and stored securely</li>
            <li><strong>Historical Response Data:</strong> Your previous replies to comments to train the AI to match your communication style</li>
          </ul>
          <p><strong>Important:</strong> We only access the minimum data necessary to provide our comment management service. We do NOT access your private videos, unlisted content, or any data beyond comment management functionality.</p>

          <h3>2.3 Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with our service including features used, pages visited, time spent on pages, click patterns, and timestamps of actions</li>
            <li><strong>Device Information:</strong> Browser type and version, operating system, IP address, device identifiers, screen resolution, and general location (country/city level only)</li>
            <li><strong>Cookies and Similar Technologies:</strong> We store, access, and collect information using cookies, local storage, session storage, and similar tracking technologies on your devices and browsers. This includes:
              <ul>
                <li>Authentication cookies to maintain your login session</li>
                <li>Preference cookies to remember your settings</li>
                <li>Analytics cookies to understand usage patterns (Google Analytics)</li>
                <li>Security cookies to prevent fraud and abuse</li>
              </ul>
            </li>
            <li><strong>Log Data:</strong> Server logs including API calls, error messages, and system performance data</li>
          </ul>

          <h3>2.4 Third-Party Data Collection</h3>
          <p>We allow the following third parties to place cookies and similar technologies on your device:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Collects anonymous usage statistics</li>
            <li><strong>Stripe:</strong> Processes payment information (if you subscribe to paid plans)</li>
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
          <p>We share your information with trusted third-party service providers who assist us in operating our service. These providers process data on our behalf and are contractually obligated to protect your information:</p>
          <ul>
            <li><strong>AI Services (OpenAI/Anthropic):</strong> Comment text and context are sent to AI providers to generate reply suggestions. These providers:
              <ul>
                <li>Process data according to their own privacy policies</li>
                <li>Do not use your data to train their models (per our agreements)</li>
                <li>Delete data after processing (temporary processing only)</li>
              </ul>
            </li>
            <li><strong>Cloud Infrastructure (Google Cloud Platform/AWS):</strong> We use secure cloud hosting to store and process data with encryption at rest and in transit</li>
            <li><strong>Payment Processors (Stripe):</strong> Payment and billing information is handled exclusively by Stripe. We never store complete credit card numbers</li>
            <li><strong>Analytics Providers (Google Analytics):</strong> Anonymous usage data to understand service performance and improve features</li>
            <li><strong>Email Service (SendGrid/Mailgun):</strong> To send transactional emails, notifications, and support communications</li>
          </ul>
          <p><strong>Data Processing Agreements:</strong> All third-party processors have signed Data Processing Agreements (DPAs) that comply with GDPR requirements.</p>

          <h3>4.2 Sharing with YouTube/Google</h3>
          <p>When you use our service to post replies to YouTube comments, that data is transmitted to YouTube through the YouTube Data API v3 and becomes subject to:</p>
          <ul>
            <li><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          </ul>
          <p>YouTube/Google may collect and process this data according to their own policies.</p>

          <h3>4.3 Internal Data Sharing</h3>
          <p>Within Nexa Reply:</p>
          <ul>
            <li>Only authorized employees and contractors with legitimate business needs can access your data</li>
            <li>All internal access is logged and monitored</li>
            <li>Employees sign confidentiality agreements</li>
          </ul>

          <h3>4.4 Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law or in response to:</p>
          <ul>
            <li>Valid legal processes (subpoenas, court orders)</li>
            <li>Government requests</li>
            <li>Protection of our rights, property, or safety</li>
            <li>Protection of our users or the public</li>
          </ul>

          <h3>4.5 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our website before your data is transferred.</p>

          <h3>4.6 No Sale of Personal Data</h3>
          <p><strong>We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.</strong> We have never sold user data and never will.</p>
        </section>

        <section>
          <h2>5. Data Storage and Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li><strong>Encryption:</strong> Data is encrypted in transit (HTTPS/TLS) and at rest</li>
            <li><strong>Access Controls:</strong> Strict access limitations and authentication requirements</li>
            <li><strong>Regular Security Audits:</strong> We regularly review and update our security practices</li>
            <li><strong>Data Minimization:</strong> We only collect and retain data necessary for service functionality</li>
          </ul>
          <p><strong>Storage Duration:</strong> We retain your data as long as your account is active. YouTube OAuth tokens are stored securely and can be revoked at any time.</p>
        </section>

        <section>
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>Nexa Reply stores, accesses, and collects information directly and indirectly on and from your devices, including by placing, accessing, and recognizing cookies and similar technologies on your devices and browsers.</p>
          
          <h3>6.1 Types of Technologies We Use</h3>
          <p>We use the following technologies on our website and application:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for authentication, security, and core functionality. These cannot be disabled without breaking the service.
              <ul>
                <li>Session cookies (expire when you close browser)</li>
                <li>Authentication tokens (JWT stored in localStorage)</li>
                <li>CSRF protection tokens</li>
              </ul>
            </li>
            <li><strong>Preference Cookies:</strong> Remember your settings and choices
              <ul>
                <li>Language preferences</li>
                <li>UI customizations</li>
                <li>Notification settings</li>
              </ul>
            </li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service (you can opt-out)
              <ul>
                <li>Google Analytics cookies (_ga, _gid, _gat)</li>
                <li>Page view tracking</li>
                <li>Feature usage statistics</li>
              </ul>
            </li>
            <li><strong>Local Storage:</strong> We store data in browser local storage including:
              <ul>
                <li>Authentication tokens</li>
                <li>User preferences</li>
                <li>Cached data for offline functionality</li>
              </ul>
            </li>
          </ul>

          <h3>6.2 Third-Party Cookies</h3>
          <p>We allow third parties to place cookies on your device:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Tracks anonymous usage statistics</li>
            <li><strong>Stripe:</strong> Fraud detection for payment processing</li>
          </ul>

          <h3>6.3 Managing Cookies</h3>
          <p>You can control cookies through your browser settings:</p>
          <ul>
            <li><strong>Block all cookies:</strong> Note that essential cookies are required for the service to function</li>
            <li><strong>Delete cookies:</strong> You can clear cookies at any time, but this will log you out</li>
            <li><strong>Opt-out of analytics:</strong> You can disable Google Analytics using browser extensions or our settings</li>
          </ul>
          <p>Browser-specific instructions:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome Cookie Settings</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox Cookie Settings</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari Cookie Settings</a></li>
          </ul>
        </section>

        <section>
          <h2>7. Your Rights and Choices</h2>
          
          <h3>7.1 Access and Control Your Data</h3>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct your information through account settings</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
            <li><strong>Data Portability:</strong> Request your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Object to certain data processing activities</li>
          </ul>

          <h3>7.2 Revoke YouTube Access</h3>
          <p>You can revoke Nexa Reply's access to your YouTube data at any time through:</p>
          <ul>
            <li>Our application settings (disconnect YouTube account)</li>
            <li>Google Security Settings: <a href="https://myaccount.google.com/connections?filters=3,4&hl=en" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/connections</a></li>
          </ul>
          <p>When you revoke access, we will delete your YouTube OAuth tokens immediately. Other account data will be retained according to our retention policy unless you request full account deletion.</p>

          <h3>7.3 Delete Your Data</h3>
          <p>To delete your data:</p>
          <ul>
            <li>Contact us at <a href="mailto:hello@nexareply.com">hello@nexareply.com</a> with your deletion request</li>
            <li>We will process your request within 30 days</li>
            <li>Some data may be retained for legal or security purposes as required by law</li>
          </ul>
        </section>

        <section>
          <h2>8. Children's Privacy</h2>
          <p>Nexa Reply is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </section>

        <section>
          <h2>9. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.</p>
        </section>

        <section>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we make changes:</p>
          <ul>
            <li>We will update the "Last Updated" date at the top of this policy</li>
            <li>Significant changes will be communicated via email or in-app notification</li>
            <li>Your continued use of the service after changes constitutes acceptance of the updated policy</li>
          </ul>
        </section>

        <section>
          <h2>11. Additional Information for EU/UK Users (GDPR)</h2>
          <p><strong>Legal Basis for Processing:</strong> We process your data based on:</p>
          <ul>
            <li>Your consent (for YouTube API access)</li>
            <li>Contract performance (to provide our services)</li>
            <li>Legitimate interests (service improvement and security)</li>
          </ul>
          <p><strong>Data Protection Officer:</strong> For GDPR-related inquiries, contact us at <a href="mailto:hello@nexareply.com">hello@nexareply.com</a></p>
        </section>

        <section>
          <h2>12. Additional Information for California Users (CCPA)</h2>
          <p>California residents have additional rights under the California Consumer Privacy Act:</p>
          <ul>
            <li>Right to know what personal information we collect and how it's used</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of sale of personal information (we do not sell data)</li>
            <li>Right to non-discrimination for exercising CCPA rights</li>
          </ul>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@nexareply.com">hello@nexareply.com</a></li>
            <li><strong>Website:</strong> <a href="https://www.nexareply.com">https://www.nexareply.com</a></li>
          </ul>
          <p>We will respond to your inquiries within 30 days.</p>
        </section>

        <div className={styles.highlightBox}>
          <p><strong>Important Links:</strong></p>
          <ul>
            <li><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><a href="https://myaccount.google.com/connections?filters=3,4&hl=en" target="_blank" rel="noopener noreferrer">Google Security Settings (Revoke Access)</a></li>
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