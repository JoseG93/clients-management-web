"use client";

import { useRouter } from "next/navigation";

import AddShipForm from "@/components/ships/AddShipForm/AddShipForm";

export default function AddShip() {
  const router = useRouter();

  function handleGoBackClick() {
    router.back("/clients");
  }
  return (
    <section className="container mx-auto flex justify-center">
      <AddShipForm title={`Agregar nueva embarcaci\u00f3n`} />
    </section>
  );
}
