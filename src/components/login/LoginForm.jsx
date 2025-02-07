"use client";

import { useInput } from "@/hooks/useInput";
import { isEmail, isNotEmpty } from "@/utils/form-validation";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginForm({ title }) {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) || isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log('* form-submitted  *', event.target);

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    
    /* TODO - implement */
    // send form to auth service
    // process login
    // redirect user if success
    // if error show
  }

  return (
    <div className="w-full max-w-xs">
      <form className="px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-white" onSubmit={handleSubmit}>
        <h1 className="mb-2 font-bold text-2xl text-center">{title}</h1>
        <Input
          label="Correo / usuario"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Por favor ingresa un correo válido."}
          required
        />
        <Input
          label="Contraseña"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Por favor ingresa tu contraseña."}
          required
        />
        <div className="text-center">
          <Button type="submit" disabled={!emailValue || !passwordValue}>Acceder</Button>
        </div>
      </form>
    </div>
  );
}
