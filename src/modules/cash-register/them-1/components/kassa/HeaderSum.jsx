"use client"
import React from "react";
import { kassaSum } from "../../utils/settings";
import kassaStore from '@/src/stores/kassa'

export default function HeaderSum() {
  const {totalAmountsObj, selectedProducts} = kassaStore()
  const items = kassaSum(totalAmountsObj, selectedProducts);

  return (
    <div className="border border-black p-[10px]">
      <div className="w-[60%] flex flex-col">
        {items?.map((item) => (
          <div key={item.id} className="flex justify-between font-bold">
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
