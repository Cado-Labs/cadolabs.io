import getAccessToken from "../../functions/utils/getAccessToken";
import sheetToVacancies from "../../functions/utils/prepareTableData";
import type { AppEnv } from "../../types/env";
import type { VacancyRecord } from "../../types/vacancy";

const VACANCIES_CACHE_KEY = "tableRecords";
const VACANCIES_CACHE_TTL_SECONDS = 3600;

export async function getVacancies(env: AppEnv | null): Promise<VacancyRecord[]> {
  if (!env) {
    return [];
  }

  const cachedValue = await env.KVDATA?.get(VACANCIES_CACHE_KEY);

  if (cachedValue) {
    console.log("Get data from KV");
    try {
      return JSON.parse(cachedValue) as VacancyRecord[];
    } catch (error) {
      console.log("Failed to parse KV cache, refetching source", error);
    }
  }

  const token = await getAccessToken(env);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${env.GSHEET_ID}/values/Vacancies!A1:Z100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const sheetData = (await response.json()) as { values: string[][] };

  const vacancies = sheetToVacancies(sheetData);

  console.log("Get data from spreadsheets");
  await env.KVDATA?.put(VACANCIES_CACHE_KEY, JSON.stringify(vacancies), {
    expirationTtl: VACANCIES_CACHE_TTL_SECONDS,
  });

  return vacancies;
}
