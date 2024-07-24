'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card, TextField, Typography } from "@mui/material";
import swim from "../../../public/swim_01.jpg";
import { useState } from "react";

function register(name: string, email: string, password: string) {
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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              id="standard-basic"
              label="Nome"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <TextField
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit">Cadastrar</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
