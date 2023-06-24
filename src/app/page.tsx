import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
  icons: {
    icon: '/',
    apple: '/',
    shortcut: '/',
  },
}

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
