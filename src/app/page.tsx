import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card, TextField, Typography } from "@mui/material";
import swim from "../../public/swim_01.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.containerMain}>
        <Card variant="outlined" className={styles.card}>
          <Image
            src={swim}
            className={styles.cardImg}
            alt="Picture of the author"
          />
          <form className={styles.form}>
            <Typography variant="h4">
              Faça login
            </Typography>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard" />
            <TextField
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button variant="contained">Login</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
