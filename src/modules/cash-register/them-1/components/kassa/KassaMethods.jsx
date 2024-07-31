"use client";
import kassaStore from "@/src/stores/kassa";
import React, { useState, useRef, useEffect } from "react";
import { kassaMethodsItem } from "../../utils/data";
import PayNumberList from "./PayNumberList";

export default function KassaMethods() {
  const { setOpenPay, totalAmountsObj, setRemainder, selectedProducts} = kassaStore();

  const [open, setOpen] = useState(false);
  const [btnValue, setBtnValue] = useState(0);
  const [focusedName, setFocusName] = useState("");
  const inputRef = useRef({});
  const [currentVal, setCurrentVal] = useState("");
  const [val, setVal] = useState("");
  const [yourSum, setUourSum] = useState("");
  
  // Состояние для общего числа
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    
    let totalCost = 0;
  
    for (const key in totalAmountsObj) {
        totalCost += totalAmountsObj[key]
    }
    setRemainder(-totalCost)
    setTotalAmount(-totalCost)

  }, [selectedProducts, totalAmountsObj])

  
  useEffect(() => {
    // console.log('totalAmount:', totalAmount);
  }, [val, btnValue]);

  useEffect(() => {
    setOpenPay(open);
  }, [open]);

  const calculateTotal = () => {


    let totalCost = 0;

    for (const key in totalAmountsObj) {
       totalCost += totalAmountsObj[key]
    }

    let negativeTotalCost = -totalCost
    let your = 0

    Object.values(inputRef.current).forEach(input => {
      negativeTotalCost += Number(input.value) || 0;
      your += Number(input.value) || 0;
      setRemainder(negativeTotalCost)
      setUourSum(your)
    });
    setTotalAmount(negativeTotalCost);
  };

  const clearUour = (e) => {
    e.preventDefault();
    Object.values(inputRef.current).forEach(input => {
      input.value = ''
    });
    setUourSum('')
    setCurrentVal('')
  }

  const clickedBtn = (val) => {
    if (!focusedName) return;

    if (val === "<") {
      const newVal = currentVal.slice(0, -1);
      setCurrentVal(newVal);
      inputRef.current[focusedName].value = newVal;
    } else {
      const newVal = currentVal + val;
      setCurrentVal(newVal);
      inputRef.current[focusedName].value = newVal;
    }

    inputRef.current[focusedName].focus();
    calculateTotal();
  };

  const handleFocused = (title) => {
    setFocusName(title);
    setCurrentVal(inputRef.current[title].value || "");
    setOpen(true);
  };

  const handleChange = (e, title) => {
    const value = e.target.value;
    setVal(value);
    setCurrentVal(value);
    calculateTotal();
  };

  const all = (e) => {

    let val = 0
    const name = e.target.getAttribute('for')

    Object.values(inputRef.current).forEach(input => {
      val += Number(input.value) || 0;
    });

    Object.values(inputRef.current).forEach(input => {
      input.value = '';
    });

    Object.values(inputRef.current).forEach(input => {
      let inputName = input.getAttribute('id')
      if (inputName === name) {
        input.value = val
      }
    });

    setCurrentVal(val)

  }

  return (
    <form
      action=""
      className="kassa__methods flex flex-col gap-[25px] relative z-[999]"
    >
      <PayNumberList
        clickedBtn={clickedBtn}
        open={open}
        setOpen={setOpen}
        btnValue={btnValue}
        setBtnValue={setBtnValue}
      />
      {kassaMethodsItem.map((item) => (
        <div className="kassa__methods-item" key={item.id}>
          <div
            className={`kassa__methods-top flex justify-between p-[10px] font-medium`}
            style={{ background: `${item.color}` }}
          >
            <span>{item.title}</span>
            <label onClick={(e) => all(e)} htmlFor={item.title}>Все</label>
          </div>
          <input
            onFocus={() => handleFocused(item.title)}
            onClick={() => handleFocused(item.title)}
            onChange={(e) => handleChange(e, item.title)}
            ref={(e) => (inputRef.current[item.title] = e)}
            id={item.title}
            type="number"
            className="kassa__methods-input p-[10px] border border-black w-full"
            placeholder="Сумма"
          />
        </div>
      ))}
      <div>
        <h3 className="mb-[10px]">Ваша сумма: {yourSum}</h3>
        <button onClick={(e) => clearUour(e)} className=" transition-all duration-300 hover:bg-[#ee673efe] border border-black p-[5px_10px] ">Очистить</button>
      </div>
    </form>
  );
}
