"use client";

import AddClientForm from "@/components/clients/AddClientForm/AddClientForm";

export default function AddClient() {
  return (
    <section className="container mx-auto flex h-full justify-center items-center">
      <AddClientForm title="Agregar un nuevo cliente" />
    </section>
  );
}
