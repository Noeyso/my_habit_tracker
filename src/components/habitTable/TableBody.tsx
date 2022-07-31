import styles from "./TableBody.module.css";
import {
  columns,
  COLUMN_TYPE,
  DATA_TYPE,
} from "../../common/data/tableContents";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

const TableBody = () => {
  const habits: DATA_TYPE[] = useSelector(
    (state: RootState) => state.habit.habit
  );

  const renderCell = (data: DATA_TYPE, idx: number) => {
    if (idx === 0) {
      return (
        <div className={styles.habit}>
          <div
            className={styles.colorbar}
            style={{ background: data.color }}
          ></div>
          <span>{data.name}</span>
        </div>
      );
    } else {
      return (
        <CustomCheckbox
          color={data.color}
          state={data.weeks[idx - 1]}
          index={idx}
        />
      );
    }
  };
  return (
    <tbody className={styles.container}>
      {habits.map((data) => (
        <tr key={data.color} className={styles.row}>
          {columns.map((column, idx) => (
            <td key={data.color + column.key} className={styles.cell}>
              {renderCell(data, idx)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
