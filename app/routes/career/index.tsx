import type { MetaFunction } from "remix";
import VacanciesList from "~/components/vacancies";
import {LoaderFunction, Link, useFetcher, useLoaderData} from "remix";
import {useEffect} from "react";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - careers",
  }
};

export default function CareerIndex() {
    let fetcher = useFetcher();
    useEffect(() => {
      fetcher.load('/airtable/getTable');
    }, []);
    return (
      <div>
        <section className="about-career">
          <div className="wrapper">
            <h1>CADO Careers</h1>
            <p>If you are <b>dynamic and motivated</b> to do something big, check out our open positions!</p>
            <div className="cado-has-denies">
              <div>
                <div className="title">CADO HAS</div>
                <ul>
                  <li>Professional and motivated team</li>
                  <li>Clear goals</li>
                  <li>Personal responsibility of each team member</li>
                  <li>Supportive and friendly Team</li>
                  <li>Latest technology tools</li>
                  <li><b>Check out </b> <Link to="/tech--radar"> our Tech Radar!</Link></li>
                </ul>
              </div>
              <div>
                <div className="title">CADO DENIES</div>
                <ul>
                  <li>Overcomplicated product infrastructure</li>
                  <li>Fear of new technology</li>
                  <li>Creating processes for the sake of processes</li>
                  <li>Army discipline</li>
                  <li>Useless and endless meetings</li>
                  <li>Bureaucracy and strict rules</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="become-one-of-us">
          <div className="wrapper">
            <h2><span>TO BECOME of one of us you will have to:</span></h2>
            <ul>
              <li>
                <img src="/images/step-1.svg" alt="Step 1" />
                  <div>
                    <div className="title">Apply the vacancy</div>
                    <div className="descr">by send your CV</div>
                  </div>
              </li>
              <li>
                <img src="/images/step-2.svg" alt="Step 2" />
                  <div>
                    <div className="title">Pass tech interview</div>
                    <div className="descr">by ZOOM or in our office</div>
                  </div>
              </li>
              <li>
                <img src="/images/step-3.svg" alt="Step 3" />
                  <div>
                    <div className="title">Show your projects</div>
                    <div className="descr">or do optional test task</div>
                  </div>
              </li>
              <li>
                <img src="/images/step-4.svg" alt="Step 3" />
                  <div>
                    <div className="title">Pass 2nd interview</div>
                    <div className="descr">with our friendly CTO</div>
                  </div>
              </li>
            </ul>
            <div className="get-offer">
              <div className="title">Get an offer!</div>
              <div className="descr">and celebrate it with us!</div>
            </div>
          </div>
        </section>
        {fetcher.data ? <VacanciesList data={fetcher.data} /> : null}
      </div>
);
}
