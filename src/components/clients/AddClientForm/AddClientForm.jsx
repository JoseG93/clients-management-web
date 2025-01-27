"use client";

import { useRouter } from "next/navigation";

import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/form-validation";
import { addClient } from "@/actions/clients/actions";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AddClientForm({ title }) {
  const router = useRouter();

  function handleGoBack(event) {
    // event.preventDefault();
    router.back();
  }

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: descriptionValue,
    handleInputChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    hasError: descriptionHasError,
  } = useInput("", (value) => isNotEmpty(value));

  async function handleSubmit(event) {
    event.preventDefault();

    if (nameHasError || descriptionHasError) {
      return;
    }
    console.log("* form-submitted  *", event.target);

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    console.log('* add-client form-data *', data);

    // const { result } = await addClient(data);

    addClient(data)
      .then(() => {
        // show alert confirmation
        // redirect user to clients page
        router.push("/")
      })
      .catch((error) => {
        console.error(error);
        // show alert error
      });
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-2 font-bold text-2xl text-center">{title}</h1>
        <Input
          label="Nombre"
          id="name"
          type="name"
          name="name"
          onBlur={handleNameBlur}
          onChange={handleNameChange}
          value={nameValue}
          error={nameHasError && "Ingresa el nombre del cliente."}
          required
        />
        <Input
          label="Descripción"
          id="description"
          type="description"
          name="description"
          onBlur={handleDescriptionBlur}
          onChange={handleDescriptionChange}
          value={descriptionValue}
          error={descriptionHasError && "Ingresa la descripción."}
          textarea
          required
        />
        <div className="flex gap-4 justify-center">
          <Button type="button" outline onClick={handleGoBack}>
            Regresar
          </Button>
          <Button type="submit" disabled={!nameValue || !descriptionValue}>Guardar</Button>
        </div>
      </form>
    </div>
  );
}
