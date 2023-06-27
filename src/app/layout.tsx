import localFont from 'next/font/local'
import '~/styles/main.css'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-roman.var.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-italic.var.woff2',
      style: 'italic',
    },
  ],
  weight: '100 900',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className={inter.variable} lang="en">
      <body className="min-w-xs antialiased">{children}</body>
    </html>
  )
}
