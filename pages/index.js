import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LanguageSelector from '../components/LanguageSelector'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nexa Reply - L'IA qui gère vos commentaires automatiquement</title>
        <meta name="description" content="Arrêtez de perdre 3 heures par jour à répondre aux commentaires. L'IA qui gère YouTube, Facebook et Instagram automatiquement." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContent}>
            <a href="#" className={styles.logo}>
              <img src="/banner.png" alt="Nexa Reply" className={styles.logoImage} />
            </a>
            <ul className={styles.navLinks}>
              <li><a href="#comment-ca-marche">Comment ça marche</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <LanguageSelector />
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Arrêtez de perdre <span className={styles.highlight}>3 heures par jour</span> à répondre aux commentaires
            </h1>
            <p>
              L'IA qui gère vos commentaires YouTube, Facebook et Instagram pendant que vous vous concentrez sur l'essentiel. 
              <strong> Configuration en 2 minutes. Résultats immédiats.</strong>
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>10x</span>
                <span className={styles.label}>Plus rapide</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>24/7</span>
                <span className={styles.label}>Disponible</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>98%</span>
                <span className={styles.label}>Précision</span>
              </div>
            </div>

            <div className={styles.heroBanner}>
              <div className={styles.bannerContent}>
                <h2 className={styles.bannerTitle}>🎯 Enfin ! Un assistant IA qui comprend votre communauté</h2>
                <p className={styles.bannerText}>
                  Plus de robots stupides qui répondent n'importe quoi. Nexa Reply apprend votre style, 
                  respecte vos règles et ne répond que quand c'est pertinent.
                </p>
                
                <div className={styles.trustBadges}>
                  <span className={styles.trustBadge}>Connexion sécurisée OAuth</span>
                  <span className={styles.trustBadge}>Aucune donnée stockée</span>
                  <span className={styles.trustBadge}>Contrôle total</span>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaGroup}>
              <button className={styles.ctaPrimary}>
                🔥 50% de réduction les 6 premiers mois - 50 premières personnes
              </button>
              <p className={styles.ctaExplanation}>
                Produit en phase de test - Contactez-nous pour réserver votre place parmi les 50 premiers et être averti du lancement
              </p>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className={styles.howItWorks} id="comment-ca-marche">
          <div className={styles.howItWorksContent}>
            <h2>🚀 Nexa Reply en 3 étapes</h2>
            <p className={styles.subtitle}>Configuration en moins de 2 minutes. Résultats immédiats.</p>
            
            <div className={styles.stepsContainer}>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.timeBadge}>30 secondes</div>
                  <div className={styles.stepNumber}>1</div>
                  <h3>🔗 Connectez vos comptes</h3>
                  <p>YouTube, Facebook ou Instagram en 1 clic sécurisé</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      <li>Connexion OAuth sécurisée</li>
                      <li>Multi-comptes supportés</li>
                      <li>Aucun mot de passe partagé</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.timeBadge}>1 minute</div>
                  <div className={styles.stepNumber}>2</div>
                  <h3>🎨 Configurez votre assistant</h3>
                  <p>Personnalisez l'IA pour qu'elle réponde exactement comme vous</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      <li><strong>Ton:</strong> Amical, professionnel, fun, sarcastique...</li>
                      <li><strong>Langues:</strong> Principale + 2 supplémentaires max</li>
                      <li><strong>Délai:</strong> Instantané, 5min, 30min, 1h...</li>
                      <li><strong>Horaires:</strong> 24/7 ou créneaux personnalisés</li>
                      <li><strong>Règles:</strong> 'Jamais de conseils médicaux', 'Rediriger collabs vers email'</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.timeBadge}>Automatique</div>
                  <div className={styles.stepNumber}>3</div>
                  <h3>🤖 L'IA travaille pour vous</h3>
                  <p>Réponses automatiques 24/7 pendant que vous créez du contenu</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      <li>Analyse vos anciennes réponses pour reproduire votre style</li>
                      <li>Gestion automatique des remerciements et questions simples</li>
                      <li>Validation requise pour les cas complexes</li>
                      <li>Dashboard temps réel pour tout contrôler</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.resultHighlight}>
                <div className={styles.icon}>⚡</div>
                <h4>Résultat : 10x plus de temps pour vous concentrer sur l'essentiel</h4>
                <p>Votre audience reçoit des réponses personnalisées 24/7. Votre communauté reste engagée, vous gardez du temps pour ce qui compte vraiment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.pricing} id="tarifs">
          <h2>💰 Pricing simple et transparent</h2>
          <p className={styles.pricingSubtitle}>Choisissez le plan qui correspond à vos besoins</p>
          
          {/* Plan Solo */}
          <div className={styles.planSection}>
            <h3 className={styles.planTitle}>📱 Plan Solo</h3>
            <p className={styles.planDescription}>Parfait pour YouTube uniquement</p>
            
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h4>🚀 Starter</h4>
                <div className={styles.price}>9€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Idéal pour démarrer avec l'IA
                </p>
                <ul className={styles.features}>
                  <li>YouTube uniquement</li>
                  <li>1 compte connecté</li>
                  <li>100 réponses automatiques/mois</li>
                  <li>Configuration de base</li>
                  <li>1 langue</li>
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>⚡ Standard</h4>
                <div className={styles.price}>29€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Pour une utilisation régulière sur YouTube
                </p>
                <ul className={styles.features}>
                  <li>YouTube uniquement</li>
                  <li>2 comptes connectés</li>
                  <li>500 réponses automatiques/mois</li>
                  <li>IA avancée + règles personnalisées</li>
                  <li>2 langues configurables</li>
                  <li>Analytics de base</li>
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>💎 Premium</h4>
                <div className={styles.price}>59€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Pour une utilisation intensive sur YouTube
                </p>
                <ul className={styles.features}>
                  <li>YouTube uniquement</li>
                  <li>5 comptes connectés</li>
                  <li>1200 réponses automatiques/mois</li>
                  <li>Toutes les fonctionnalités IA</li>
                  <li>3 langues configurables</li>
                  <li>Analytics avancés</li>
                  <li>Support prioritaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plan Multi */}
          <div className={styles.planSection}>
            <h3 className={styles.planTitle}>🌐 Plan Multi</h3>
            <p className={styles.planDescription}>YouTube + Facebook + Instagram</p>
            
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h4>🚀 Starter</h4>
                <div className={styles.price}>15€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Testez sur les 3 plateformes principales
                </p>
                <ul className={styles.features}>
                  <li>3 plateformes (YouTube + Facebook + Instagram)</li>
                  <li>1 compte par plateforme</li>
                  <li>100 réponses automatiques/mois (total)</li>
                  <li>Configuration de base</li>
                  <li>1 langue</li>
                </ul>
              </div>

              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.popular}>🔥 Plus populaire</div>
                <h4>⚡ Standard</h4>
                <div className={styles.price}>39€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Automatisation complète multi-plateformes
                </p>
                <ul className={styles.features}>
                  <li>3 plateformes (YouTube + Facebook + Instagram)</li>
                  <li>2 comptes par plateforme</li>
                  <li>500 réponses automatiques/mois (total)</li>
                  <li>IA avancée + règles personnalisées</li>
                  <li>3 langues configurables</li>
                  <li>Analytics détaillés</li>
                  <li>Horaires personnalisés</li>
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>🏢 Premium</h4>
                <div className={styles.price}>79€</div>
                <div className={styles.pricePeriod}>/mois</div>
                <p className={styles.priceDescription}>
                  Pour les agences et équipes
                </p>
                <ul className={styles.features}>
                  <li>3 plateformes (YouTube + Facebook + Instagram)</li>
                  <li>5 comptes par plateforme</li>
                  <li>1200 réponses automatiques/mois (total)</li>
                  <li>Gestion d'équipe (2 sièges)</li>
                  <li>Export analytics</li>
                  <li>Modèles personnalisés</li>
                  <li>Support dédié</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={styles.contact} id="contact">
          <div className={styles.contactContent}>
            <h2>Contactez-nous</h2>
            <p className={styles.contactSubtitle}>
              Une question ? Une suggestion ? Nous sommes là pour vous aider.
            </p>

            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <h3>Informations de contact</h3>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email :</span>
                  <span className={styles.contactEmailText}>hello@nexareply.com</span>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h3>Envoyez-nous un message</h3>
                <form>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nom complet</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Décrivez votre demande..."></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}