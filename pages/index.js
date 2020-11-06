import Head from 'next/head'
import Datepicker from '../components/Datepicker';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My awesome Datepicker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8">
        <Datepicker width={300} />
      </div>

    </div>
  )
}
