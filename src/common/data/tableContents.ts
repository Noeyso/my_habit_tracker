export type COLUMN_TYPE = { key: string; name: string };
export const columns: COLUMN_TYPE[] = [
  {
    key: "habit",
    name: "",
  },
  {
    key: "mon",
    name: "월",
  },
  {
    key: "tue",
    name: "화",
  },
  {
    key: "wed",
    name: "수",
  },
  {
    key: "thu",
    name: "목",
  },
  {
    key: "fri",
    name: "금",
  },
  {
    key: "sat",
    name: "토",
  },
  {
    key: "sun",
    name: "일",
  },
];

export type DATA_TYPE = {
  id: string;
  habit: string;
  weeks: number[];
};

export const mock_data: DATA_TYPE[] = [
  {
    id: "#8fd3f4",
    habit: "윗몸일으키기 30개",
    weeks: [1, 4],
  },
  {
    id: "#8ae2c4",
    habit: "책읽기",
    weeks: [2],
  },
];
