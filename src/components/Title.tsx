import Head from 'next/head'

interface Props {
  suffix?: string
  children: string
}

export default function Title({ suffix, children }: Props): JSX.Element {
  const title = children + (suffix != null ? ` - ${suffix}` : '')

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    </Head>
  )
}
