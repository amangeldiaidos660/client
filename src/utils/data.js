import { v4 as uuidv4 } from "uuid";

export const header = {
  nav: {
    background: '#0073e6',
    color: 'white', 
    list: [
      { id: uuidv4(), title: "Admin", href: "/admin", isActive: true },
      { id: uuidv4(), title: "Home", href: "/", isActive: true },
      { id: uuidv4(), title: "About", href: "/about", isActive: true },
      { id: uuidv4(), title: "Contacts", href: "/contacts", isActive: true },
      { id: uuidv4(), title: "Cart", href: "/cart", isActive: false },
      {id: uuidv4(),title: "Cash Register",href: "/cash-register",isActive: false,},
    ],
    template: 'them-1',
  },
};

export const body = {
    background: "#fff",
    color: "#fff",
}

export const footer = {
  background: "blue",
  links: [
    { id: uuidv4(), title: "Адреса магазинов", href: "/", isActive: true },
    { id: uuidv4(), title: "Акции и скидки", href: "/", isActive: true },
    { id: uuidv4(), title: "Юридическим лицам", href: "/", isActive: true },
    { id: uuidv4(), title: "Как заказать", href: "/", isActive: true },
    { id: uuidv4(), title: "Обмен и возврат", href: "/", isActive: true },
  ],
  social: [
    { id: uuidv4(), title: "Telegram", href: "/", isActive: true },
    { id: uuidv4(), title: "instagram", href: "/", isActive: true },
    { id: uuidv4(), title: "VK", href: "/", isActive: true },
  ],
};