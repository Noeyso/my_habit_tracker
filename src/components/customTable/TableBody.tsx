import React from "react";
import styles from "./TableBody.module.css";
import {
  columns,
  COLUMN_TYPE,
  DATA_TYPE,
  mock_data,
} from "../../common/data/tableContents";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";

const TableBody = () => {
  const renderCell = (data: DATA_TYPE, column: COLUMN_TYPE, idx: number) => {
    if (idx == 0) {
      return (
        <div className={styles.habit}>
          <div
            className={styles.colorbar}
            style={{ background: data.id }}
          ></div>
          <span>{data.habit}</span>
        </div>
      );
    } else {
      if (data.weeks.includes(idx)) {
        return <CustomCheckbox color={data.id} state={true} />;
      }
      return <CustomCheckbox color={data.id} state={false} />;
    }
  };
  return (
    <tbody className={styles.container}>
      {mock_data.map((data) => (
        <tr key={data.id} className={styles.row}>
          {columns.map((column, idx) => (
            <td key={data.id + column.key} className={styles.cell}>
              {renderCell(data, column, idx)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
