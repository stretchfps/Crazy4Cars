import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Crazy4Cars',
  description: 'Your true companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="realtive">
          <Navbar/>
          {children}
          <Footer />
      </body>
    </html>
  )
}
