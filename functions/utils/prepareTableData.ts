export type TVacancy = {
  fields: {
    card_descr: string;
    card_title: string
    slug: string;
  }
  id: string;
}

export type TSheetData = {
    values: string[][]
}


const sheetToVacancies = (sheetData: TSheetData): TVacancy[] => {
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
      fields: fields as unknown as TVacancy["fields"],
    };
  });
}

export default sheetToVacancies
