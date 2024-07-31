import React from 'react'
import HeaderSum from './HeaderSum'
import КassaMethods from './KassaMethods';
import KassaCalculate from './KassaCalculate'

export default function Kassa() {
  return (
    <div className='flex flex-col justify-between gap-[30px] border border-black p-[15px_10px] relative h-[100%] z-[999] bg-white'>
        <HeaderSum/>
        <КassaMethods/>
        <KassaCalculate/>
    </div>
  )
}
