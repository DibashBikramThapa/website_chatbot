import React, { useState } from "react";

import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Website ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero/>
      </Layout>
    </div>
  );
}
