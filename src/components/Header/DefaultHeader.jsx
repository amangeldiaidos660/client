"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import NavbarDefault from '@/src/components/Navbar/NavbarDefault'

import ThemDefaultNavbar from '@/src/templates/online-store/ThemDefaultNavbar'

import Them1Navbar from '@/src/templates/online-store/them-1/Them1Navbar'

import Them2Navbar from '@/src/templates/online-store/them-2/Them2Navbar'

import Them3Navbar from '@/src/templates/online-store/them-3/Them3Navbar'
import optionsStore from '@/src/stores/options';
import { usePathname } from 'next/navigation';


export default function DefaultHeader() {

  // const NavbarDefault = dynamic(() => import('@/components/Navbar/NavbarDefault.jsx'), {
  //   loading: () => <p>Loading...</p>,
  //   ssr: false,
  // });

  // const [url, setUrl] = useState('');

  const {optionStatus, template} = optionsStore();

  const [DynamicNavbar, setDynamicNavbar] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavbar();
    }
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavbar();
    }
  }, [optionStatus, template]);

  function setNavbar() {
    const localUrl = localStorage.getItem('options-store')
      ? JSON.parse(localStorage.getItem('options-store'))
      : null;

    if (localUrl) {
      const { template, optionStatus } = localUrl.state;

      if (optionStatus === 'template') {
        if (template === 'them-default'){
          console.log('ThemDefaultNavbar');
          // setUrl('@/templates/online-store/ThemDefault.jsx');
          setDynamicNavbar(<ThemDefaultNavbar/>)
        } 
        else if (template === 'them-1'){
          console.log('Them1Navbar');
          // setUrl('@/templates/online-store/them-1/Them1.jsx');
          setDynamicNavbar(<Them1Navbar/>)
        } 
        else if (template === 'them-2'){
          console.log('Them2Navbar');
          // setUrl('@/templates/online-store/them-2/Them2.jsx');
          setDynamicNavbar(<Them2Navbar/>)
        } 
        else if (template === 'them-3'){
          console.log('Them3Navbar');
          // setUrl('@/templates/online-store/them-3/Them3.jsx');
          setDynamicNavbar(<Them3Navbar/>)
        } 
      } else if (optionStatus === 'option') {
        console.log('NavbarDefault');
        // setUrl('@/components/Navbar/NavbarDefault');
        setDynamicNavbar(<NavbarDefault/>)
        // setDynamicBody(<NavbarDefault/>)
      }
    }
  }

  const pathname = usePathname();

  return (
    <>
    {DynamicNavbar && pathname != '/cash-register' && pathname != '/cash-register/settings' ? DynamicNavbar : '' }
      
    </>
  );
}
