"use client";

import { useEffect, useState } from "react";
import { AVAILABLE_RATING_YEARS, getCurrentRatingYear, getRatingData, type RatingRow } from "../model/useRating";
import styles from "./RatingTable.module.css";

export function RatingTable() {
  const [selectedYear, setSelectedYear] = useState<number>(getCurrentRatingYear());
  const [rows, setRows] = useState<RatingRow[]>([]);

  useEffect(() => {
    let isActive = true;

    void getRatingData(selectedYear).then((data) => {
      if (isActive) {
        setRows(data);
      }
    });

    return () => {
      isActive = false;
    };
  }, [selectedYear]);

  return (
    <section className={styles.section} aria-label="City rating table">
      <div className={styles.controls}>
        <select
          className={styles.select}
          value={selectedYear}
          onChange={(event) => setSelectedYear(Number(event.target.value))}
        >
          {AVAILABLE_RATING_YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th className={styles.headCell}>Rank</th>
              <th className={styles.headCell}>Name</th>
              <th className={styles.headCell}>Wins</th>
              <th className={styles.headCell}>Losses</th>
              <th className={styles.headCell}>Tournaments</th>
              <th className={styles.headCell}>Rating</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className={`${styles.row} ${row.rank <= 3 ? styles.topRow : ""}`} key={row.id}>
                <td className={styles.cell}>{row.rank}</td>
                <td className={styles.cell}>{row.name}</td>
                <td className={styles.cell}>{row.wins}</td>
                <td className={styles.cell}>{row.losses}</td>
                <td className={styles.cell}>{row.tournaments}</td>
                <td className={styles.cell}>{row.rating.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
