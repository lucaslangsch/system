'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import swim from "../../../public/swim_01.jpg";
import { useFormState } from 'react-dom'
import registerUser from "../actions/registerUser";

export default function Register() {
  const prevState = {
    message: '',
  }

  const [state, formAction] = useFormState(registerUser, prevState)

  return (
    <main className={styles.main}>
      <div className={styles.containerMain}>
        <Card variant="outlined" className={styles.card}>
          <Image
            src={swim}
            className={styles.cardImg}
            alt="Picture of the author"
          />
          <form className={styles.form} action={formAction}>
            <Typography variant="h4">
              Cadastro
            </Typography>
            <TextField
              id="standard-name"
              name="name"
              label="Nome"
              required
              variant="standard"
            />
            <TextField
              id="standard-email"
              label="Email"
              required
              name="email"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Senha"
              name="password"
              required
              type="password"
              autoComplete="current-password"
              variant="standard"

            />
            <Button variant="contained" type="submit">Cadastrar</Button>
            {state?.message ? <Alert severity="warning">{state.message}</Alert> : null}
          </form>
        </Card>
      </div>
    </main>
  );
}
