"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AddShipForm({ title, handleGoBack }) {
  return (
    <div className="mt-8 p-6 bg-white w-1/2 flex flex-col justify-center rounded-md">
      <form action="">
        <h1 className="mb-4 font-bold text-2xl">{title}</h1>
      </form>
      <div className="flex gap-4 justify-center">
        <Button outline onClick={handleGoBack}>
          Regresar
        </Button>
        <Button>Guardar</Button>
      </div>
    </div>
  );
}
