import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home() {
  const [amount, setAmount] = React.useState(0);
  React.useEffect(()=>{
    axios.get('/api/hello').then(response => {
      console.log(response);
      if(response && response.status === 200){
        const balance = response.data.balance;
        // setAmount(response.data.balance.current);
      }
    });
  }, [amount]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2><span>$ </span>{amount}</h2>
            <p>Last updated 3 mins ago</p>
          </div>
        </div>
      </main>
    </div>
  )
}
