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
  color: string;
  name: string;
  weeks: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
};

export const mock_data: DATA_TYPE[] = [
  {
    color: "#8fd3f4",
    name: "윗몸일으키기 30개",
    weeks: [false, false, false, true, true, false, false],
  },
  {
    color: "#8ae2c4",
    name: "책읽기",
    weeks: [true, false, false, false, true, false, false],
  },
];
