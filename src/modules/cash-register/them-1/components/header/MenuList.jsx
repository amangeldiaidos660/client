"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menuListShow } from "../../utils/data";
import kassaStore from "@/src/stores/kassa";
import clsx from "clsx";

export default function MenuList() {
  const { openMenu } = kassaStore();

  return (
    <div
      className={clsx(
        "menu duration-300 flex flex-col max-w-[300px] w-full p-[15px] translate-x-[-100%] border-r-[1px] border-b-[1px] border-black bg-white absolute t-0 l-0",
        {
          "translate-x-[0px]": openMenu === true,
        }
      )}
    >
      <ul className="menu__list flex flex-col gap-[20px]">
        {menuListShow?.map((item) => (
          <Link
            key={item.id}
            href=""
            className="menu__list text-[#0d6efd] text-[16px]"
          >
            {item.title}
          </Link>
        ))}
        <li></li>
      </ul>
      <span>Eшe +4</span>
    </div>
  );
}
