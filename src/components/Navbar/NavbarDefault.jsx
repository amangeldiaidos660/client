"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./NavbarDefault.scss";
import optionsStore from "@/src/stores/options";

export default function NavbarDefault() {

  
const { headerState } = optionsStore();

  const [list, setList] = useState([]);
  const [background, setBackground] = useState("");
  const [color, setColor] = useState("");

  

  useEffect(() => {

    if (typeof window !== 'undefined'){
      const localOptions = localStorage.getItem('options-store')
        ? JSON.parse(localStorage.getItem('options-store'))
        : null;

      if (localOptions) {
  
        const {headerState, bodyState, footerState} = localOptions.state
  
        const filteredList = headerState.nav.list.filter((item) => item.isActive);
        setList(filteredList);
        setBackground(headerState.nav.background);
        setColor(headerState.nav.color);
        console.log(localOptions);
      }
      else{
        setList(headerState.nav.list);
        setBackground(headerState.nav.background);
        setColor(headerState.nav.color);
      }
    }
   

  }, [headerState]);

  return (
    <nav
      className="nav fixed top-[0] left-[0] w-full z-50 bg-black text-white"
      style={{ background: background, color: color }}
    >
      <div className="container">
      <Link href="/" className="nav__logo text-[30px] text-[red]">Logo</Link>
        <ul className="nav__list">
          {list &&
            list?.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="nav__link text-[25px] font-black text-[25px] hover:text-[red]">{link.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
