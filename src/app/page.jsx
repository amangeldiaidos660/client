"use client"
import optionsStore from "@/src/stores/options";
import { useEffect, useState } from "react";

import BodyDefault from '@/src/components/Body/BodyDefault'

import ThemDefault from '@/src/templates/online-store/ThemDefault'

import Them1 from '@/src/templates/online-store/them-1/Them1'

import Them2 from '@/src/templates/online-store/them-2/Them2'

import Them3 from '@/src/templates/online-store/them-3/Them3'

export default function Home() {

  



  // const [bg, setBg] = useState('');

  // useEffect(() => {
  //   setBackground();
  // }, []);

  // function setBackground() {
  //   const localUrl = localStorage.getItem('options-store')
  //     ? JSON.parse(localStorage.getItem('options-store'))
  //     : null;

  //   if (localUrl) {
  //     const { template, optionStatus } = localUrl.state;
      
      
  //     if (optionStatus == 'template') {
  //       console.log(123);
  //       if (template == 'them-default'){
  //         setBodyState({ background: '#413b3b', color: "#000" });
  //         setBg('#413b3b')
  //       } 
  //       else if (template == 'them-1'){
  //         setBodyState({ background: '#addbf3', color: "#000" });
  //         setBg('#413b3b')
  //       } 
  //       else if (template == 'them-2'){
  //         setBodyState({ background: '#98f198', color: "#000" });
  //         setBg('#413b3b')
  //       } 
  //       else if (template == 'them-3'){
  //         setBodyState({ background: '#e2e29b', color: "#000" });
  //         setBg('#413b3b')
  //       } 
  //     } else if (optionStatus == 'option') {
  //       setBodyState({background: bodyState.background, color: bodyState.color });
  //       setBg(bodyState.background)
  //     }
  //   }
  // }

  // console.log(bg);


  // const [DynamicNavbar, setDynamicNavbar] = useState(null)
  // const [DynamicBody, setDynamicBody] = useState(null)

 

  // function setNavbar() {
  //   const localUrl = localStorage.getItem('options-store')
  //     ? JSON.parse(localStorage.getItem('options-store'))
  //     : null;

  //   if (localUrl) {
  //     const { template, optionStatus } = localUrl.state;

  const {bodyState, setBodyState, optionStatus, template} = optionsStore();

  const [DynamicBody, setDynamicBody] = useState(null)


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBody();
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBody();
    }
  }, [template, ]);

  function setBody() {

      if (optionStatus === 'template') {
        if (template === 'them-default'){
          // setUrl('@/templates/online-store/ThemDefault.jsx');
          setDynamicBody(<ThemDefault/>)
          console.log('ThemDefault');
        } 
        else if (template === 'them-1'){
          // setUrl('@/templates/online-store/them-1/Them1.jsx');
          setDynamicBody(<Them1/>)
          console.log('Them1');
        } 
        else if (template === 'them-2'){
          // setUrl('@/templates/online-store/them-2/Them2.jsx');
          setDynamicBody(<Them2/>)
          console.log('Them2');
        } 
        else if (template === 'them-3'){
          // setUrl('@/templates/online-store/them-3/Them3.jsx');
          setDynamicBody(<Them3/>)
          console.log('Them3');
        } 
      } else if (optionStatus === 'option') {
        // setUrl('@/components/Navbar/NavbarDefault');
        // setDynamicNavbar(<NavbarDefault/>)
        setDynamicBody(<ThemDefault/>)
        console.log('ThemDefault');
      }
    }
  // }
console.log('HomePage');

  return (
    <main className="main min-h-[100vh]">
      {DynamicBody ? DynamicBody : <p>Loading...</p> }
    </main>
  );
}

