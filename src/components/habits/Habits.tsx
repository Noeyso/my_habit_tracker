import React, { useMemo, useState } from "react";
import styles from "./Habits.module.css";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";
import Table from "../customTable/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { DATA_TYPE } from "../../common/data/tableContents";
const Habits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.divider}></div>
      <Table />
    </section>
  );
};
export default Habits;
