"use client"
import Link from "next/link";
import React, { useRef, useState } from "react";
import { menuBtns } from "../../utils/data";
import clsx from "clsx";
import '../../Them-1.scss'

export default function MenuPageList() {

    const [activeName, setActiveName] = useState('Левое меню')
    const linkRef = useRef(null);

    const setBtnActive = (i)=> {
        setActiveName(menuBtns[i].title)
    }

  return (
    <div className="menu__layout">
      <Link
        href="/"
        className="menu__back block bg-[#fc7a7a] text-[16px] p-[10px] w-max mb-[10px]"
      >
        Закрыть
      </Link>
      <ul className="menu__list flex gap-[15px]">
        {menuBtns?.map((item) => (
          <li key={item.id} onClick={() => setBtnActive(i)}>
            <Link href="" ref={linkRef} className={clsx("menu__link block p-[10px] border border-black", {
              "active": activeName == item.title
            })}>
                {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
