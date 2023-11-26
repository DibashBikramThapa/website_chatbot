import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head';
import Layout from '../../../components/layout'
import BusinessSetup from '../../../components/ServiceDetails/BusinessSetup';
import LegalService from '../../../components/ServiceDetails/LegalService';



export default function Services() {
  const router = useRouter()
  const [slug, setSlug] = useState('');
  const [imgsrc, setImg] = useState('#');
  const [details, setDetails] = useState({});

  const reset = ()=>{
    setImg('')
    setDetails('')
  }

  const setPageDetails = ()=>{
    switch(slug){
      case 'Business-setup-consultancy-advice':
        setImg('/images/bank-ac-opening.webp')
        setDetails({
          'title': 'BANK ACCOUNT OPENING IN UAE',
          'body': 'OPEN A BANK ACCOUNT WITH ANY OF THE UAE’S MOST TRUSTED BANKS',
          'description': `Let our in-house experts make business bank account opening easy and convenient for you.`,
        })
        break
      case 'Trade-license-processing':
        setImg('/images/trade-license.webp')
        setDetails({
          'title': '',
          'body': '',
          'description': ``,
        })
        break;
      case 'Legal-services':
        setImg('/images/legal-service.webp')
        setDetails({
          'title': 'LEGAL SERVICES',
          'body': 'GET EXPERT LEGAL ADVICE AND UNDERSTAND THE UAE’S BUSINESS LAWS',
          'description': `Our legal team will advise you on the UAE’s laws and regulations on M&As, corporate restructuring, financing operations and dispute
                         resolution, among others.`,
        })
        break;
      case 'Corporate-secretarial-services':
        setImg('/images/corporate-service.webp')
        setDetails({
          'title': '',
          'body': '',
          'description': ``,
        })
        break;
      case 'Accounting-and-tax-services':
        setImg('/images/account-tax.webp')
        setDetails({
          'title': 'ACCOUNTING SERVICES & PAYROLL',
          'body': 'MANAGE YOUR ACCOUNTING, PAYROLL AND FINANCIAL REPORTS EFFICIENTLY',
          'description': `Our highly qualified accountants will help you efficiently manage your finances. We provide bookkeeping, reconciliation, financial
                          reporting, payroll, VAT reports and audit support.`,
        })
        break;
      case 'Visa-and-permit-processing':
        setImg('/images/visa.png')
        setDetails({
          'title': 'Visa and permit processing',
          'body': 'ENJOY A SMOOTH AND HASSLE-FREE TOURIST VISA APPLICATION PROCESS',
          'description': `Our visa application process has been refined over time to ensure a smooth and hassle-free experience for you.`,
        })
        break;
      case 'Business-support-services':
        setImg('/images/business-support.webp')
        setDetails({
          'title': 'Business Support Services',
          'body': 'CHOOSING MAINLAND BUSINESS ACTIVITIES',
          'description': `Setting up a mainland company gives you the benefit of choosing from over 3,000 business activities. Let us guide you through your
                          mainland business setup.`,
        })
        break;
      default:
        reset()
    }
  }

  useEffect(() => {
    if(slug){
      setPageDetails()
    }else{
      reset()
    }
  }, [slug]);

  useEffect(() => {
    setSlug(router.query.slug)
  },)


  return (
  <>
    <Head>
      <title>{router?.query?.slug}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
        <div className='bg-blue-700 flex justify-around md:flex-row flex-col'>
          <div className='p-5 md:px-[10rem] text-white font-bold'>
            <h4 className='text-xl mt-5 pt-5 pb-3'>{details.title}</h4>
              <p className='text-4xl max-w-[28rem] pb-3'>{details.body}</p>
            <p className='text-xl'>{details.description}</p>
          </div>
          <img src={imgsrc} className='w-[30rem]'/>
        </div>

      <div className='p-5 md:px-[10rem] bg-gray-200'>
        { slug== 'Business-setup-consultancy-advice' ? <BusinessSetup/> : ''}
        { slug== 'Legal-services' ? <LegalService/> : ''}
        {/* Added for filling space */}
        { slug== 'Trade-license-processing' ? <LegalService/> : ''}
        { slug== 'Corporate-secretarial-services' ? <LegalService/> : ''}
        { slug== 'Accounting-and-tax-services' ? <LegalService/> : ''}
        { slug== 'Visa-and-permit-processing' ? <LegalService/> : ''}
        { slug== 'Business-support-services' ? <LegalService/> : ''}
      </div>
    </Layout>

  </>
  )
}