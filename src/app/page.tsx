'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import swim from "../../public/swim_01.jpg";
import Link from "next/link";
import authUser from "./actions/authUser";
import { useFormState } from "react-dom";

export default function Home() {
  const prevState = {
    message: '',
  }

  const [state, formAction] = useFormState(authUser, prevState)

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
              Faça login
            </Typography>
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              required
              variant="standard" />
            <TextField
              id="standard-password-input"
              label="Senha"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              variant="standard"
            />
            <Button variant="contained" type="submit">Login</Button>
            <Typography variant="body1">
              Não possui cadastro?
              &nbsp;
              <Link href="/register">Registre-se</Link>
            </Typography>
            {state?.message ? <Alert severity="warning">{state.message}</Alert> : null}
          </form>
        </Card>
      </div>
    </main>
  );
}
