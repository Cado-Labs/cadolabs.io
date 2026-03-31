import { useRouteLoaderData } from "react-router";
import type { VacancyRecord } from "../../types/vacancy";

export type RootLoaderData = {
  vacancies: VacancyRecord[];
};

export function useVacancies() {
  const data = useRouteLoaderData("root") as RootLoaderData | undefined;

  return data?.vacancies ?? [];
}
