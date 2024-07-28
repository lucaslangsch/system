'use server'

import { cookies } from 'next/headers'

function validateMail(email: string) {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    return false
  }
  return true
}

function validatePassword(password: string) {
  if (password.length < 8) {
    return false
  }
  return true
}

export default async function registerUser(prevState: any, form: FormData) {
  "use server"
  const name: any = form.get('name')
  const email = form.get('email')
  const password = form.get('password')

  if (!validateMail(email as string)) {
    return { message: 'Por favor, insira um email válido' }
  }

  if (!validatePassword(password as string)) {
    return { message: 'Por favor, insira uma senha com mais de 8 caracteres' }
  }

  const body = JSON.stringify({ name, email, password })

  try {
    const response = await fetch("http://localhost:3001/users/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await response.json();

    cookies().set({
      name: 'currentUser',
      value: name,
      httpOnly: true,
    })

    return {
      message: 'ok',
    }

  } catch (error) {
    console.error('Error:', error);
    return {
      message: 'Erro no servidor, por favor tente novamente mais tarde',
    }
  }
}
