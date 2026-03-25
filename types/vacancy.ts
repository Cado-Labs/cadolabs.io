export type VacancyFields = {
  card_descr: string;
  card_title: string;
  slug: string;
  page_title?: string;
  page_short_descr?: string;
  responsibilities?: string;
  requirements?: string;
  considered?: string;
  we_offer?: string;
  url?: string;
};

export type VacancyRecord = {
  fields: VacancyFields;
  id: string;
};
