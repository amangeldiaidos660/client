import Kassa from "@/src/modules/cash-register/them-1/components/kassa/Kassa";
import Navbar from "@/src/modules/cash-register/them-1/components/header/Navbar";
import Table from "@/src/modules/cash-register/them-1/components/Table";
import './Them-1.scss'
export default function CashRegister() {
  return (
    <main className="flex cashRegister">
        <section className="cashRegister__left !w-[80%]">
          <Navbar />
          <Table />
        </section>
        <section className="cashRegister__right !w-[20%]">
          <Kassa />
        </section>
    </main>
  );
}
