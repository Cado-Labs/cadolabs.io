import type { MetaFunction } from "react-router";
import VacanciesList from "~/components/vacancies";
import { useVacancies } from "~/utils/root-data";
export const meta: MetaFunction = () => {
  return [{ title: "Cadolabs - teach radar" }];
};

export default function Privacy() {
    const vacancies = useVacancies();
    return (
      <div>
        <section className="tech-radar">
          <div className="wrapper">
            <iframe src="https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html" height="1200" width="100%" title="Tech radar"/>
          </div>
        </section>
        {vacancies.length ? <VacanciesList data={vacancies} /> : null}
      </div>
    );
}
