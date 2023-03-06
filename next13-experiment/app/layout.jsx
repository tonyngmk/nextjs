import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${montserrat.className}`}>
    {/* <body> */}
      <nav>
        <h1>logo</h1>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </nav>
      {children}
    </body>
    </html>
  )
}
