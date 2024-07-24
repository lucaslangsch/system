'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import swim from "../../../public/swim_01.jpg";
import { useState } from "react";

export default function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [messageError, setMessageError] = useState("")

function register(name: string, email: string, password: string) {
  if (!validateMail(email)) return;

  if (!validatePassword(password)) return;

  const body = JSON.stringify({ name, email, password });
  fetch("http://localhost:3001/users/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function validateMail(email: string) {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regex.test(email)) {
    setMessageError("Insira um email válido")
    return false
  }
  setMessageError("")
  return true
}

function validatePassword(password: string) {
  if (password.length < 8) {
    setMessageError("Insira uma senha com pelo menos 8 caracteres")
    return false
  }
  setMessageError("")
  return true
}


  return (
    <main className={styles.main}>
      <div className={styles.containerMain}>
        <Card variant="outlined" className={styles.card}>
          <Image
            src={swim}
            className={styles.cardImg}
            alt="Picture of the author"
          />
          <form className={styles.form} onSubmit={(e) => {
            e.preventDefault();
            register(name, email, password);
          }}>
            <Typography variant="h4">
              Cadastro
            </Typography>
            <TextField
              id="standard-name"
              label="Nome"
              required
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-email"
              label="Email"
              required
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <TextField
              id="standard-password-input"
              label="Senha"
              required
              type="password"
              
              autoComplete="current-password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit">Cadastrar</Button>
            {
              messageError.length > 1 && 
              <Alert severity="warning">{ messageError }</Alert>
            }
          </form>
        </Card>
      </div>
    </main>
  );
}
