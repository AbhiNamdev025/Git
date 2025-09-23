import React from "react";
import styles from "./Tooltip.module.css";
function ToolTip() {
  return (
    <div className={styles.tooltip}>
      Hover Me
      <span className={styles.tooltipText}>
        Namaskaar Mitron mai Hun ToolTip.
      </span>
    </div>
  );
}

export default ToolTip;
