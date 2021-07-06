import { ENUM } from "sequelize/types";

export const statuses = ENUM(
  "Активные",
  "В резерве",
  "Отчисленные",
  "В ожидании"
);
