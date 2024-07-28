'use server'

import { cookies } from 'next/headers'

export default async function authUser(prevState: any, form: FormData) {
  "use server"
  const email: any = form.get('email')
  const password = form.get('password')

  const body = JSON.stringify({ email, password })

  try {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    cookies().set({
      name: 'currentUser',
      value: data.data.name,
      httpOnly: true,
    })

    return {
      message: 'ok',
    }

  } catch (error) {
    console.error('Error:', error);
    return {
      message: 'Usuário ou senha inválidos',
    }
  }

}
