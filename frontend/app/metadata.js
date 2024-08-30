export const metadata = {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: {
      default: 'Adventure',
      template: `%s - Adventure`
    },
    description: 'Find different people who like to travel',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  };