"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import optionsStore from "@/src/stores/options";
import s from './ThemDefault.module.scss'
import classNames from "classnames";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ThemDefaultNavbar() {
  const { headerState } = optionsStore();

  const [list, setList] = useState([]);

  useEffect(() => {
    
    if (headerState) {

      const filteredList = headerState.nav.list.filter((item) => item.isActive);
      setList(filteredList);
    }
  
  }, [headerState]);

  const pathname = usePathname();


  return (
    <nav
      className={s.nav}>
      <div className={classNames("container", s.nav__container)}>
        <Link href="/" className={s.nav__logo}>Logo</Link>
        <ul className={s.nav__list}>
          {list &&
            list?.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className={clsx(s.nav__link, {
                  [s.active]: pathname == link.href 
                })}>{link.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
