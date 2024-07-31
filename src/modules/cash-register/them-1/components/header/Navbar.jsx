"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import kassaStore from '@/src/stores/kassa';
import '../../Them-1.scss';

export default function Navbar() {

  const { setOpenMenu, openMenu, setSearchProduct, setAmountChose, error, setError } = kassaStore()

  const [errors, setErrors] = useState(false);
  const [text, setText] = useState('');

  useEffect(()=> {

    setErrors(error)

    const id = setTimeout(() => {
      setError(false)
      setErrors(false)
    }, 3000);

    return () => clearTimeout(id)

  }, [error])

  const setSearch = (val) => {
    setSearchProduct(val)
    setText(val)
  }

  const clear = (e) => {
    e.preventDefault();
    console.log(123);
    setText('');
    setSearchProduct('');
  }

  return (
    <header className="header">
      <nav className="nav p-[20px] flex justify-between items-end">
        <div className="nav__menu flex gap-[10px] flex-col">
          <Link href="/cash-register/settings" className="nav__setting p-[10px]">
            <FontAwesomeIcon icon={faGear} className="nav__setting-icon w-[16px] h-[16px]" />
          </Link>
          <Link onClick={() => setOpenMenu(!openMenu)} href="" className="nav__menu-list flex gap-[10px] items-center">
            <FontAwesomeIcon icon={faBars} className="nav__menu-list-icon w-[15px] h-[18px]" />
            <span className="text-[18px]">Меню</span>
          </Link>
        </div>
        {errors && <span className="nav__clear error text-[14px] text-[#de4b22f5]">Вы уже выбрали этот товар</span>}
        <form action="" className="nav__form w-[40%] flex gap-[10px] items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            value={text}
            placeholder="Введите наименование или штрихкод товара"
            className="nav__input border border-black p-[10px_20px] w-[70%]"
          />
          <button onClick={(e) => clear(e)}><FontAwesomeIcon icon={faXmark} className="text-[25px]" /></button>
          <div className="nav__number flex items-end gap-[5px]">
          <input onChange={(e) => setAmountChose(Number(e.target.value))} type="number" defaultValue="1" min="1" max="100" className="nav__input-amount p-[10px_5px_10px_20px] border border-black max-w-[74px] w-full" />
          <span>шт</span>
          </div>
        </form>
      </nav>
    </header>
  );
}
