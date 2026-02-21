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
    <section className={styles.section} aria-label="Таблица городского рейтинга">
      <div className={styles.controls}>
        <label className={styles.label} htmlFor="rating-year">
          {"\u0413\u043e\u0434 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430"}
        </label>
        <select
          id="rating-year"
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
        {rows.length === 0 ? (
          <p className={styles.empty}>{"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0433\u043e\u0434"}</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr className={styles.headRow}>
                <th className={styles.headCell}>{"\u041c\u0435\u0441\u0442\u043e"}</th>
                <th className={styles.headCell}>{"\u0418\u0433\u0440\u043e\u043a"}</th>
                <th className={styles.headCell}>{"\u041f\u043e\u0431\u0435\u0434\u044b"}</th>
                <th className={styles.headCell}>{"\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}</th>
                <th className={styles.headCell}>{"\u0422\u0443\u0440\u043d\u0438\u0440\u044b"}</th>
                <th className={styles.headCell}>{"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}</th>
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
        )}
      </div>
    </section>
  );
}
