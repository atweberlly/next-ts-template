import '~/styles/main.css'

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className="min-w-xs antialiased">{children}</body>
    </html>
  )
}
