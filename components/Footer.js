import React from "react";
import styles from "../pages/styles/footer.module.scss";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        Created with love by English Teacher and coder,{" "}
        <a href="https://github.com/crevulus" target="_blank">
          Chris Evans
        </a>{" "}
        (no, not that one).
      </div>
    </div>
  );
}
