import '../styles/globals.css'
import { FirebaseProvider } from '../context/FirebaseContext'
import { DynamicContextProvider, DynamicWagmiConnector, EthereumWalletConnectors, ZeroDevSmartWalletConnectors } from '../lib/dynamic';
import { Providers } from '../lib/WagmiProvider'

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
        <DynamicContextProvider
          settings={{
            // Find your environment id at https://app.dynamic.xyz/dashboard/developer
            environmentId: "6e7fa39b-7f3f-4264-9b41-887447305902",
            walletConnectors: [EthereumWalletConnectors, ZeroDevSmartWalletConnectors],
          }}
        >
          <Providers>
            <DynamicWagmiConnector>
              <FirebaseProvider>
                {children}
              </FirebaseProvider>
            </DynamicWagmiConnector>
          </Providers>
        </DynamicContextProvider>
      </body>
    </html>
  )
}
