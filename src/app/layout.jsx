import './globals.css'
import './assets/css/tailwind.css'
import "./assets/css/materialdesignicons.min.css"
import { Figtree} from 'next/font/google'

const figtree= Figtree({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable: '--font-figtree',
})

export const metadata = {
  title: 'Bluedill',
  description: 'Management App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <head>
           <link as='image' rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link as='image' rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" as='image'  type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" as='image' href="/site.webmanifest" />
      </head>
      <body className={`${figtree.variable} font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900 `}>{children}</body>
    </html>
  )
}
