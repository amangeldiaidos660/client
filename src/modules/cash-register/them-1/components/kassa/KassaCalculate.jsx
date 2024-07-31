"use client"
import kassaStore from "@/src/stores/kassa";
import clsx from "clsx";
import React, { useEffect } from "react";

export default function KassaCalculate() {
  const {remainder} = kassaStore();

  return (
    <div className="kassaCalculate flex flex-col justify-center w-[90%] m-[0_auto]">
      {
        remainder < 0 && <h4 className="kassaCalculate__title">Касса уходит в минус</h4>
      }
      {
        remainder == 0 && <h4 className="kassaCalculate__title">Остаток</h4>
      }
      {
        remainder > 0 && <h4 className="kassaCalculate__title">Сдача</h4>
      }
      <h4 className="kassaCalculate__title">{}</h4>
      <h4 className="kassaCalculate__title">{}</h4>
      <div className="kassaCalculate__box flex items-center">
        <div className={clsx("kassaCalculate__show text-[16px] p-[10px_15px] border border-[#c02d2dd7] w-[55%]", {
          "!border-[#c5c524b6]": remainder > 0,
          "!border-[#30b900]": remainder == 0,
        })}>
          {remainder > 0 ? '+ ' + remainder : remainder}
        </div>
        <button
          disabled={remainder < 0}
          className={clsx("kassaCalculate__btn p-[15px] bg-[#c02d2dd7] opacity-[0.5]", {
            "opacity-[1] !bg-[#c5c524b6]": remainder > 0,
            "opacity-[1] !bg-[#30b900]": remainder == 0,
          })}
        >
          РАСЧИТАТЬ
        </button>
      </div>
      <div className="kassaCalculate__debt flex gap-[5px] text-[16px] font-medium">
        <input type="checkbox" />
        <span>Записать платеж в долг</span>
      </div>
    </div>
  );
}
