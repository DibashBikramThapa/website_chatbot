import React, { useState } from "react";

import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Services from "../components/services";
import Services2 from "../components/services2";
import Insights from "../components/insights";
import ContactUs from "../components/contactUs";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Website ChatBot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero/>
        <Services />
        {/* <Services2 /> */}
        <Insights />
        <ContactUs />
      </Layout>
    </div>
  );
}
