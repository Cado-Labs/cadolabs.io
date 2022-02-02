import type {MetaFunction} from "remix";
import {LoaderFunction, useLoaderData} from "remix";
import VacanciesList from "~/components/vacancies";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - teach radar",
  }
};

export const loader: LoaderFunction = async (context) => {
    const baseUrl = new URL(context.request.url);
    return await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
        method: "GET"
    });
}

export default function Privacy() {
    const vacanciesList = JSON.parse(useLoaderData()).records;
  return (
      <div>
        <section className="tech-radar">
          <div className="wrapper">
            <iframe src="https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html" height="1200" width="100%" title="Tech radar"></iframe>
          </div>
        </section>
          {vacanciesList ? <VacanciesList data={vacanciesList} /> : ''}
      </div>
    );
}
