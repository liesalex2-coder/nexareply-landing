import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LanguageSelector from '../components/LanguageSelector'
import translations from '../translations'

export default function SpanishPage() {
  const t = translations.es;

  return (
    <div className={styles.container}>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <nav className={styles.nav}>
          <div className={styles.navContent}>
            <a href="#" className={styles.logo}>
              <img src="/banner.png" alt="Nexa Reply" className={styles.logoImage} />
            </a>
            <ul className={styles.navLinks}>
              <li><a href="#como-funciona">{t.nav.howItWorks}</a></li>
              <li><a href="#precios">{t.nav.pricing}</a></li>
              <li><a href="#contacto">{t.nav.contact}</a></li>
            </ul>
            <LanguageSelector />
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              {t.hero.title} <span className={styles.highlight}>{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p>
              {t.hero.subtitle} 
              <strong> {t.hero.subtitleBold}</strong>
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.number}>{t.hero.stats.speed.number}</span>
                <span className={styles.label}>{t.hero.stats.speed.label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>{t.hero.stats.availability.number}</span>
                <span className={styles.label}>{t.hero.stats.availability.label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>{t.hero.stats.precision.number}</span>
                <span className={styles.label}>{t.hero.stats.precision.label}</span>
              </div>
            </div>

            <div className={styles.heroBanner}>
              <div className={styles.bannerContent}>
                <h2 className={styles.bannerTitle}>{t.hero.banner.title}</h2>
                <p className={styles.bannerText}>{t.hero.banner.text}</p>
                
                <div className={styles.trustBadges}>
                  <span className={styles.trustBadge}>{t.hero.banner.badges.secure}</span>
                  <span className={styles.trustBadge}>{t.hero.banner.badges.noData}</span>
                  <span className={styles.trustBadge}>{t.hero.banner.badges.control}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaGroup}>
              <button className={styles.ctaPrimary}>{t.hero.cta.button}</button>
              <p className={styles.ctaExplanation}>{t.hero.cta.explanation}</p>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks} id="como-funciona">
          <div className={styles.howItWorksContent}>
            <h2>{t.howItWorks.title}</h2>
            <p className={styles.subtitle}>{t.howItWorks.subtitle}</p>
            
            <div className={styles.stepsContainer}>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.timeBadge}>{t.howItWorks.steps.step1.time}</div>
                  <div className={styles.stepNumber}>{t.howItWorks.steps.step1.number}</div>
                  <h3>{t.howItWorks.steps.step1.title}</h3>
                  <p>{t.howItWorks.steps.step1.description}</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      {t.howItWorks.steps.step1.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.timeBadge}>{t.howItWorks.steps.step2.time}</div>
                  <div className={styles.stepNumber}>{t.howItWorks.steps.step2.number}</div>
                  <h3>{t.howItWorks.steps.step2.title}</h3>
                  <p>{t.howItWorks.steps.step2.description}</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      {t.howItWorks.steps.step2.features.map((feature, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: feature }} />
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.timeBadge}>{t.howItWorks.steps.step3.time}</div>
                  <div className={styles.stepNumber}>{t.howItWorks.steps.step3.number}</div>
                  <h3>{t.howItWorks.steps.step3.title}</h3>
                  <p>{t.howItWorks.steps.step3.description}</p>
                  <div className={styles.stepDetails}>
                    <ul className={styles.featureList}>
                      {t.howItWorks.steps.step3.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.resultHighlight}>
                <div className={styles.icon}>⚡</div>
                <h4>{t.howItWorks.result.title}</h4>
                <p>{t.howItWorks.result.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.featuresContent}>
            <h2>{t.features.title}</h2>
            <p className={styles.featuresSubtitle}>{t.features.subtitle}</p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{t.features.reporting.icon}</div>
                <h3>{t.features.reporting.title}</h3>
                <p className={styles.featureDescription}>{t.features.reporting.description}</p>
                <ul className={styles.featureList}>
                  {t.features.reporting.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{t.features.workspace.icon}</div>
                <h3>{t.features.workspace.title}</h3>
                <p className={styles.featureDescription}>{t.features.workspace.description}</p>
                <ul className={styles.featureList}>
                  {t.features.workspace.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pricing} id="precios">
          <h2>{t.pricing.title}</h2>
          <p className={styles.pricingSubtitle}>{t.pricing.subtitle}</p>
          
          <div className={styles.planSection}>
            <h3 className={styles.planTitle}>{t.pricing.solo.title}</h3>
            <p className={styles.planDescription}>{t.pricing.solo.description}</p>
            
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h4>{t.pricing.solo.starter.name}</h4>
                <div className={styles.price}>{t.pricing.solo.starter.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.solo.starter.period}</div>
                <p className={styles.priceDescription}>{t.pricing.solo.starter.description}</p>
                <ul className={styles.features}>
                  {t.pricing.solo.starter.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>{t.pricing.solo.standard.name}</h4>
                <div className={styles.price}>{t.pricing.solo.standard.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.solo.standard.period}</div>
                <p className={styles.priceDescription}>{t.pricing.solo.standard.description}</p>
                <ul className={styles.features}>
                  {t.pricing.solo.standard.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>{t.pricing.solo.premium.name}</h4>
                <div className={styles.price}>{t.pricing.solo.premium.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.solo.premium.period}</div>
                <p className={styles.priceDescription}>{t.pricing.solo.premium.description}</p>
                <ul className={styles.features}>
                  {t.pricing.solo.premium.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.planSection}>
            <h3 className={styles.planTitle}>{t.pricing.multi.title}</h3>
            <p className={styles.planDescription}>{t.pricing.multi.description}</p>
            
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h4>{t.pricing.multi.starter.name}</h4>
                <div className={styles.price}>{t.pricing.multi.starter.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.multi.starter.period}</div>
                <p className={styles.priceDescription}>{t.pricing.multi.starter.description}</p>
                <ul className={styles.features}>
                  {t.pricing.multi.starter.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.popular}>{t.pricing.multi.standard.popular}</div>
                <h4>{t.pricing.multi.standard.name}</h4>
                <div className={styles.price}>{t.pricing.multi.standard.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.multi.standard.period}</div>
                <p className={styles.priceDescription}>{t.pricing.multi.standard.description}</p>
                <ul className={styles.features}>
                  {t.pricing.multi.standard.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.pricingCard}>
                <h4>{t.pricing.multi.premium.name}</h4>
                <div className={styles.price}>{t.pricing.multi.premium.price}</div>
                <div className={styles.pricePeriod}>{t.pricing.multi.premium.period}</div>
                <p className={styles.priceDescription}>{t.pricing.multi.premium.description}</p>
                <ul className={styles.features}>
                  {t.pricing.multi.premium.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contacto">
          <div className={styles.contactContent}>
            <h2>{t.contact.title}</h2>
            <p className={styles.contactSubtitle}>{t.contact.subtitle}</p>

            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <h3>{t.contact.info.title}</h3>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>{t.contact.info.email}</span>
                  <span className={styles.contactEmailText}>{t.contact.info.emailValue}</span>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h3>{t.contact.form.title}</h3>
                <form>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t.contact.form.name}</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t.contact.form.email}</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">{t.contact.form.message}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder={t.contact.form.placeholder}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    {t.contact.form.submit}
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