import React from "react";


import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function Home() {

  return (
    <div className="min-w-[38rem]">
      <Head>
        <title>Website ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='bg-hero flex flex-col justify-center items-center'>
          <Hero
          />
        </div>
      </Layout>

    </div>
  );
}
