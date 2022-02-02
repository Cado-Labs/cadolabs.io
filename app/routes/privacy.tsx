import type {MetaFunction} from "remix";
import {LoaderFunction, useLoaderData} from "remix";
import VacanciesList from "~/components/vacancies";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - privacy policy",
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
        <section className="content">
            <div className="wrapper">
              <h1>Privacy Policy</h1>
              <div className="text">
                <p>This privacy policy will explain how&nbsp;we (hereinafter &quot;Company&quot;) uses the personal data
                  we&nbsp;collect from you when you use our website.</p>
                <h3>Our Company collects the following data:</h3>
                <p>Personal identification information such&nbsp;as:</p>
                <ul>
                  <li>name</li>
                  <li>email</li>
                  <li>etc.</li>
                </ul>
                <h3>Our Company collects your data so&nbsp;that we&nbsp;can:</h3>
                <p>Process your order.</p>
                <p>Email you with special offers on&nbsp;other products and services we&nbsp;think you might like.</p>
                <p>If&nbsp;you agree, Company will share your data with our partner companies so&nbsp;that they may
                  offer you their products and services.</p>
                <p>When the Company processes your order, it&nbsp;may send your data&nbsp;to, and also use the resulting
                  information from, credit reference agencies to&nbsp;prevent fraudulent purchases.</p>
                <h3>How do&nbsp;we&nbsp;store your data?</h3>
                <p>The company securely stores your data in&nbsp;accordance with the Data Processing legislation.</p>
                <p>The company will keep your data for 1&nbsp;year. Once this time period has expired, we&nbsp;will
                  delete your data.</p>
                <h3>Marketing</h3>
                <p>The company would like to&nbsp;send you information about products and services of&nbsp;ours that
                  we&nbsp;think you might like, as&nbsp;well as&nbsp;those of&nbsp;our partner companies.</p>
                <p>If&nbsp;you have agreed to&nbsp;receive marketing, you may always opt-out at&nbsp;a&nbsp;later
                  date.</p>
                <p>You have the right at&nbsp;any time to&nbsp;stop Company from contacting you for marketing purposes
                  or&nbsp;giving your data to&nbsp;other members of&nbsp;the Company Group.</p>
                <p>If&nbsp;you no&nbsp;longer wish to&nbsp;be&nbsp;contacted for marketing purposes, please send&nbsp;us
                  an&nbsp;email.</p>
                <h3>What are your data protection rights?</h3>
                <p>Our Company would like to&nbsp;make sure you are fully aware of&nbsp;all of&nbsp;your data protection
                  rights.</p>
                <h3>Every user is&nbsp;entitled to&nbsp;the following:</h3>
                <p>The right to&nbsp;access&nbsp;&mdash; You have the right to&nbsp;request the Company for copies
                  of&nbsp;your personal data. We&nbsp;may charge you a&nbsp;small fee for this service.</p>
                <p>The right to&nbsp;rectification&nbsp;&mdash; You have the right to&nbsp;request that Our Company
                  correct any information you believe is&nbsp;inaccurate. You also have the right to&nbsp;request Our
                  Company to&nbsp;complete information you believe is&nbsp;incomplete.</p>
                <p>The right to&nbsp;erasure&nbsp;&mdash; You have the right to&nbsp;request that Company erase your
                  personal data, under certain conditions.</p>
                <p>The right to&nbsp;restrict processing&nbsp;&mdash; You have the right to&nbsp;request that the
                  Company restrict the processing of&nbsp;your personal data, under certain conditions.</p>
                <p>The right to&nbsp;object to&nbsp;processing&nbsp;&mdash; You have the right to&nbsp;object
                  to&nbsp;Our Company&rsquo;s processing of&nbsp;your personal data, under certain conditions.</p>
                <p>The right to&nbsp;data portability&nbsp;&mdash; You have the right to&nbsp;request that Our Company
                  transfer the data that we&nbsp;have collected to&nbsp;another organization, or&nbsp;directly
                  to&nbsp;you, under certain conditions.</p>
                <p>If&nbsp;you make a&nbsp;request, we&nbsp;have one month to&nbsp;respond to&nbsp;you. If&nbsp;you
                  would like to&nbsp;exercise any of&nbsp;these rights, please contact&nbsp;us at&nbsp;our email.</p>
                <blockquote>
                  Our core value is&nbsp;to&nbsp;be&nbsp;genuinely helpful and effective. We&nbsp;invest in&nbsp;our
                  Team&rsquo;s development and education and constantly search for ways to&nbsp;further optimise and
                  improve so&nbsp;that we&nbsp;can stay on&nbsp;top of&nbsp;our game.
                  <br/><cite>&mdash;&nbsp;CTO Cado Labs</cite>
                </blockquote>
              </div>

            </div>
        </section>
        {vacanciesList ? <VacanciesList data={vacanciesList} /> : ''}
      </div>
);
}
