"use client";
import React, { useEffect, useRef, useState } from "react";
import useOptionsStore from "@/src/stores/options";
import './admin.scss'
import optionsStore from "@/src/stores/options";
import clsx from "clsx";

export default function Page() {

  const [containerActive, setContainerActive] = useState('');

  const optionRef = useRef(null);
  const templateRef = useRef(null);
  const optionRadioRef = useRef(null);
  const templateRadioRef = useRef(null);

  const {
    optionStatus,
    setOptionStatus,
    headerState,
    setHeaderState,
    bodyState,
    setBodyState,
    footerState,
    setFooterState,
    template,
    setTemplate,
    method,
    setMethod,
  } = useOptionsStore();

  const methodChose = (e) => {
    
    console.log(templateRef.current.getAttribute('data-name'));
    const value = e.target.value

    
      // if(value != optionStatus){
      //   setContainerActive(value)
      //   setMethod(value)
      // }
      // else if(method == 'template' && e.target == templateRadioRef.current) {
      //   setMethod('option')
      //   setContainerActive('option')
      // }


      // добавляем класс active контейнерам формы
      if(e.target.value == 'template'){
        templateRef.current.classList.remove('active')
        optionRef.current.classList.remove('active')
        templateRef.current.classList.add('active')
      }
      else if(e.target.value == 'option'){
        optionRef.current.classList.remove('active')
        templateRef.current.classList.remove('active')
        optionRef.current.classList.toggle('active')
      }

    
  }

  useEffect(() => {

    console.log(optionStatus);
    if(optionStatus == 'template'){
      templateRef.current.classList.remove('active')
      optionRef.current.classList.remove('active')
      templateRef.current.classList.add('active')
      const optionStatusInput = document.querySelector(`input[name="status"][value="${optionStatus}"]`);
    if (optionStatusInput) {
      optionStatusInput.checked = true;
    }
    }
    else if(optionStatus == 'option'){
      optionRef.current.classList.remove('active')
      templateRef.current.classList.remove('active')
      optionRef.current.classList.toggle('active')
    }


  }, [])

  // Запоминаем выбранные чекбоксы и кнопки
  useEffect(() => {
    const optionStatusInput = document.querySelector(`input[name="status"][value="${optionStatus}"]`);
    if (optionStatusInput) {
      optionStatusInput.checked = true;
    }

    const navBackgroundInput = document.querySelector(`input[name="nav-background"][value="${headerState.nav.background}"]`);
    if (navBackgroundInput) {
      navBackgroundInput.checked = true;
    }

    const navColorInput = document.querySelector(`input[name="nav-color"][value="${headerState.nav.color}"]`);
    if (navColorInput) {
      navColorInput.checked = true;
    }

    const bodyBgInput = document.querySelector(`input[name="body-bg"][value="${bodyState.background}"]`);
    if (bodyBgInput) {
      bodyBgInput.checked = true;
    }

    const templateInput = document.querySelector(`input[name="them"][value="${template}"]`);
    if (templateInput) {
      templateInput.checked = true;
    }

    headerState.nav.list.forEach((link) => {
      const linkInput = document.querySelector(`input[name="${link.title}"]`);
      if (linkInput) {
        linkInput.checked = link.isActive;
      }
    });
  }, [headerState, bodyState, template]);

  function getInfo(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // получение данных из формы
    const data = {
      optionStatus: formData.get("status"),
      navBackground: formData.get("nav-background"),
      navColor: formData.get("nav-color"),
      bodyBg: formData.get("body-bg"),
      links: {
        Admin: formData.has("Admin"),
        Home: formData.has("Home"),
        About: formData.has("About"),
        Contacts: formData.has("Contacts"),
        "Cash Register": formData.has("Cash Register"),
        Cart: formData.has("Cart"),
      },
      template: formData.get("them"),
    };

    
// Получение актуальных ссылок
    const newLinks = headerState.nav.list.map((link) => {
      if (link.title in data.links) {
        return {
          ...link,
          isActive: data.links[link.title],
        };
      }
      return link;
    });


    // обновляем хранилище
    setOptionStatus(data.optionStatus)
    setTemplate(data.template);
    setHeaderState({
      nav: {
        background: data.navBackground,
        color: data.navColor,
        list: newLinks,
      },
    });
    setBodyState({ background: data.bodyBg, color: "#000" });
  }

  return (
    <div className="admin">
    <form action="" onSubmit={getInfo} className={"admin__form pt-[100px] pb-[30px]"} style={{background: bodyState.background}}>
      <div className="container admin__container active flex flex-col gap-[20px]">
      <fieldset className="admin__form-part border border-black rounded p-[20px] flex-col gap-[20px]">
          <legend className="admin__form-title text-[22px] font-black">
            Использовать шаблон или Ручная настройка
          </legend>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Ручная</span>
              <input onClick={(e) => methodChose(e)} ref={optionRadioRef} type="radio" value="option" name="status" />
            </label>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Шаблон</span>
              <input onClick={(e) => methodChose(e)} ref={templateRadioRef} type="radio" value="template" name="status" />
            </label>
          </div>
      </fieldset>
      </div>
      <div ref={optionRef} data-name="option" className="container admin__container flex flex-col gap-[20px]">
      <fieldset className="admin__form-part border border-black rounded p-[20px] flex-col gap-[20px]">
          <legend className="admin__form-title text-[22px] font-black">
            Навигационная панель
          </legend>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            <h2 className="admin__form-subtitle mb-[10px] font-bold">
              Задний фон
            </h2>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Белый</span>
              <input type="radio" value="white" name="nav-background" />
            </label>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Черный</span>
              <input type="radio" value="#000" name="nav-background" />
            </label>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Синий</span>
              <input type="radio" value="blue" name="nav-background" />
            </label>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Зеленый</span>
              <input type="radio" value="green" name="nav-background" />
            </label>
            <label
              htmlFor="bg"
              className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black"
            >
              <span>Желтый</span>
              <input type="radio" value="yellow" name="nav-background" />
            </label>
          </div>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            <h2 className="admin__form-subtitle mb-[10px] font-bold">
              Цвет шрифта
            </h2>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Белый</span>
              <input type="radio" value="#fff" name="nav-color" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Серый</span>
              <input type="radio" value="#808080" name="nav-color" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Черный</span>
              <input type="radio" value="#000" name="nav-color" />
            </label>
          </div>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            <h2 className="admin__form-subtitle mb-[10px] font-bold">
              Ссылки навигации по сайту
            </h2>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Админ панель</span>
              <input type="checkbox" name="Admin" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Главная страница</span>
              <input type="checkbox" name="Home" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Страница О нас</span>
              <input type="checkbox" name="About" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Страница контактов</span>
              <input type="checkbox" name="Contacts" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Касса</span>
              <input type="checkbox" name="Cash Register" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Корзина</span>
              <input type="checkbox" name="Cart" />
            </label>
          </div>
        </fieldset>
        <fieldset className="admin__form-part border border-black rounded p-[20px] flex-col">
          <legend className="admin__form-title text-[22px] font-black">
            Основной контент
          </legend>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            <h2 className="admin__form-subtitle mb-[10px] font-bold">
              Задний фон
            </h2>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Белый</span>
              <input type="radio" value="#fff" name="body-bg" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Серый</span>
              <input type="radio" value="#dad8d8" name="body-bg" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Голубой</span>
              <input type="radio" value="#d0f6f7" name="body-bg" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Светло Желтый</span>
              <input type="radio" value="#f4f4b0" name="body-bg" />
            </label>
          </div>
        </fieldset>
      </div>
      <div ref={templateRef} data-name="template" className="container admin__container flex flex-col gap-[20px]">
      <fieldset  className="admin__form-part border border-black rounded p-[20px] flex-col">
          <legend className="admin__form-title text-[22px] font-black">
            Шаблоны
          </legend>
          <div className="admin__form-block flex flex-col gap-[10px] mb-[20px]">
            <h2 className="admin__form-subtitle mb-[10px] font-bold">Интернет магазин</h2>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Тема поумолчанию</span>
              <input type="radio" value="them-default" name="them" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Тема 1</span>
              <input type="radio" value="them-1" name="them" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Тема 2</span>
              <input type="radio" value="them-2" name="them" />
            </label>
            <label className="admin__form-label flex gap-[20px] max-w-[500px] w-full flex justify-between border-b border-black">
              <span>Тема 3</span>
              <input type="radio" value="them-3" name="them" />
            </label>
          </div>
      </fieldset>
      </div>
      <button
          className={`admin__form-btn border border-black rounded p-[5px_10px] bg-white w-[150px] hover:text-white hover:bg-[#0073e6] transition duration-300 fixed bottom-[30px] right-[100px]`}
        >
          Сохранить
        </button>
    </form>
    </div>
  );
}
