import type {MetaFunction} from "remix";
import {useFetcher} from "remix";
import VacanciesList from "~/components/vacancies";
import {useEffect} from "react";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - teach radar",
  }
};

export default function Privacy() {
    let fetcher = useFetcher();
    useEffect(() => {
        fetcher.load('/airtable/getTable');
    }, []);
    return (
      <div>
        <section className="tech-radar">
          <div className="wrapper">
            <iframe src="https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html" height="1200" width="100%" title="Tech radar"/>
          </div>
        </section>
        {fetcher.data ? <VacanciesList data={fetcher.data} /> : null}
      </div>
    );
}
