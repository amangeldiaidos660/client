"use client"
import React, { useState } from "react";
import { payNumberList } from "../../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export default function PayNumberList({open, setOpen, btnValue, clickedBtn}) {


  return ( 
    <div className={clsx("payNumber hidden max-w-[255px] w-full border border-black absolute bg-white z-[100] right-[125%] top-[0]", {
      "!block": open === true
    })}>
        <span onClick={() => setOpen(false)} className=" flex justify-center items-center w-[25px] h-[25px] rounded-[50%] bg-[#ec522c] text-white absolute top-0 right-0 translate-y-[-50%] translate-x-[50%]">
            <FontAwesomeIcon icon={faXmark} className="text-[20px]" />
        </span>
      <div className="payNumber__items p-[30px_15px_15px] flex flex-wrap justify-between gap-[15px]">
        {payNumberList?.map((item, i) => (
          <div onClick={()=> clickedBtn(item.value)} key={item.id} className="payNumber__item w-[50px] cursor-pointer h-[45px] border border-black flex justify-center items-center">
            {i <= payNumberList.length -2 ? item.value : <FontAwesomeIcon icon={faDeleteLeft} />}
            </div>
        ))}
      </div>
      <button className="payNumber__btn p-[10px_15px] bg-[#b4ffd2] w-full">ПРИМЕНИТЬ</button>
    </div>
  );
}
