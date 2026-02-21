import Image from "next/image";
import { getPlayersGridData } from "../model/usePlayersGrid";
import styles from "./PlayersGrid.module.css";

export async function PlayersGrid() {
  const players = await getPlayersGridData();

  return (
    <section className={styles.grid} aria-label="Registered players">
      {players.map((player) => (
        <article className={styles.card} key={player.id}>
          <Image className={styles.avatar} src={player.avatar} alt={player.fullName} width={140} height={140} />
          <p className={styles.name}>{player.fullName}</p>
          <p className={styles.meta}>{"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}: {player.age}</p>
          <p className={styles.meta}>
            NTRP: <span className={styles.ntrpBadge}>{player.ntrp.toFixed(1)}</span>
          </p>
        </article>
      ))}
    </section>
  );
}
