import { columns } from "./column";
import styles from "./TableHeader.module.css";
const TableHeader = () => {
  return (
    <thead className={styles.container}>
      <tr>
        {columns.map((column) => (
          <th key={column.key} className={styles.column}>
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
