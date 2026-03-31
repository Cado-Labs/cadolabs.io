import type { VacancyRecord } from "../../types/vacancy";

export type TSheetData = {
    values: string[][]
}


const sheetToVacancies = (sheetData: TSheetData): VacancyRecord[] => {
  const values = sheetData.values;

  if (!values || values.length < 2) return [];

  const headers = values[0];
  const rows = values.slice(1);

  return rows.map((row, idx) => {
    const fields: Record<string, string> = {};
    headers.forEach((header, colIdx) => {
      fields[header] = row[colIdx] ?? "";
    });
    return {
      id: `rec${idx + 1}`,
      fields: fields as unknown as VacancyRecord["fields"],
    };
  });
}

export default sheetToVacancies
