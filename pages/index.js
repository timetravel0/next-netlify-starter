import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>danielelando.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="danielelando.me" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
