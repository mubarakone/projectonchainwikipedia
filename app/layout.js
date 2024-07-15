import '../styles/globals.css'
import { FirebaseProvider } from '../context/FirebaseContext'

export const metadata = {
  title: 'Project Onchain Wikipedia - Wikipedia',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  )
}
