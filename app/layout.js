import '../styles/globals.css'
import { FirebaseProvider } from '../context/FirebaseContext'

export const metadata = {
  title: 'Project Onchain Wikipedia - Wikipedia',
  icon: '/favicon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="flex flex-col min-h-screen">
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  )
}
