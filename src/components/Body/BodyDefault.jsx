'use client'
import React, {useState, useEffect} from 'react'
import optionsStore from '@/src/stores/options'

import ThemDefault from '@/src/templates/online-store/ThemDefault'
import Them1 from '@/src/templates/online-store/them-1/Them1'
import Them2 from '@/src/templates/online-store/them-2/Them2'
import Them3 from '@/src/templates/online-store/them-3/Them3'

export default function BodyDefault() {

const {bodyState, setBodyState} = optionsStore();



const [bg, setBg] = useState('');

useEffect(() => {
    if (typeof window !== 'undefined'){
        setBackground();
    }
}, []);

function setBackground() {
const localUrl = localStorage.getItem('options-store')
? JSON.parse(localStorage.getItem('options-store'))
: null;

if (localUrl) {
const { template, optionStatus } = localUrl.state;


if (optionStatus == 'template') {
console.log(123);
if (template == 'them-default'){
    setBodyState({ background: '#413b3b', color: "#000" });
    setBg('#413b3b')
} 
else if (template == 'them-1'){
    setBodyState({ background: '#addbf3', color: "#000" });
    setBg('#413b3b')
} 
else if (template == 'them-2'){
    setBodyState({ background: '#98f198', color: "#000" });
    setBg('#413b3b')
} 
else if (template == 'them-3'){
    setBodyState({ background: '#e2e29b', color: "#000" });
    setBg('#413b3b')
} 
} else if (optionStatus == 'option') {
// setBodyState(bodyState.background);
setBg(bodyState.background)
}
}
}

console.log(bg);

return (
<div className="main min-h-[100vh]" style={{background: bg}}>BodyDefault</div>
)
}
