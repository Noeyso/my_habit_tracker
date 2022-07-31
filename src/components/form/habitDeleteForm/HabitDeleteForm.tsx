import React from "react";
import Form from "../Form";
import styles from "./HabitDeleteForm.module.css";

const HabitDeleteForm: React.FC<{
  deleteHabit: () => void;
}> = (props) => {
  return (
    <div>
      <Form title="습관 삭제" width="25%">
        <span className={styles.txt}>정말 삭제하시겠어요?</span>
        <div className={styles.btns}>
          <button className={styles.btn_delete} onClick={props.deleteHabit}>
            삭제하기
          </button>
        </div>
      </Form>
    </div>
  );
};

export default HabitDeleteForm;
