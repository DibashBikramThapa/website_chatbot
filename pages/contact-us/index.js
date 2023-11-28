import React from 'react'
import Head from 'next/head';

import ContactUs from '../../components/contactUs'
import Layout from '../../components/layout'


export default function index() {
  return (
    <>
        <Head>
            <title>Contact Us</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <ContactUs/>
        </Layout>
    </>
  )
}
