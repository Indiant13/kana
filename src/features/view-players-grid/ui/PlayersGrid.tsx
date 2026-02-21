import Image from "next/image";
import { getPlayersGridData } from "../model/usePlayersGrid";
import styles from "./PlayersGrid.module.css";

export async function PlayersGrid() {
  const players = await getPlayersGridData();

  return (
    <section className={styles.grid} aria-label="Registered players">
      {players.map((player) => (
        <article className={styles.card} key={player.id}>
          <Image className={styles.avatar} src={player.avatar} alt={player.name} width={140} height={140} />
          <p className={styles.name}>{player.name}</p>
        </article>
      ))}
    </section>
  );
}
