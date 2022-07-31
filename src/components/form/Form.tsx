import React, { ReactNode, useState } from "react";
import styles from "./Form.module.css";
import { IoClose } from "react-icons/io5";

const Form: React.FC<{ title: string; width?: string; children: ReactNode }> = (
  props
) => {
  const [isClose, setIsClose] = useState(false);
  return (
    <div
      className={styles.container}
      style={{ display: isClose ? "none" : "flex" }}
    >
      <section className={styles.form} style={{ width: props.width }}>
        <header className={styles.header}>
          <h2 className={styles.title}>{props.title}</h2>
          <button onClick={() => setIsClose(true)}>
            <IoClose size={30} />
          </button>
        </header>
        <section className={styles.body}>{props.children}</section>
      </section>
    </div>
  );
};

export default Form;
