import './globals.css'

export const metadata = {
  title: 'The Niyi Fagbemi',
  description: 'A Fan site for Niyi Fagbemi',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
