import './globals.css'

export const metadata = {
  title: 'Nexa Reply - Répondez 10x plus vite',
  description: 'L\'IA qui répond automatiquement à vos commentaires YouTube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <span className="logo">N</span>
              <span className="brand-name">Nexa Reply</span>
            </div>
            <div className="nav-links">
              <a href="#how-it-works">Comment ça marche</a>
              <a href="#pricing">Tarifs</a>
              <button className="btn-primary">Essai gratuit</button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}