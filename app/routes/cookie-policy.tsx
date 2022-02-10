import type {MetaFunction} from "remix";
import {useFetcher} from "remix";
import VacanciesList from "~/components/vacancies";
import {useEffect} from "react";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - cookie policy",
  }
};

export default function Privacy() {
    let fetcher = useFetcher();
    useEffect(() => {
      fetcher.load('/airtable/getTable');
    }, []);
    return (
      <div>
        <section className="content">
          <div className="wrapper">
            <h1>Cookie Policy</h1>
            <div className="text">
              <h3>What are cookies?</h3>
              <p>Cookies are text files placed on&nbsp;your computer to&nbsp;collect standard Internet log information
                and visitor behavior information. When you visit our websites, we&nbsp;may collect information from you
                automatically through cookies or&nbsp;similar technology.</p>
              <p>For further information, visit allaboutcookies.org.</p>
              <h3>How do&nbsp;we&nbsp;use cookies?</h3>
              <p>Our Company uses cookies in&nbsp;a&nbsp;range of&nbsp;ways to&nbsp;improve your experience on&nbsp;our
                website, including:</p>
              <ul>
                <li>Keeping you signed in</li>
                <li>Understanding how you use our website</li>
              </ul>
              <h3>What types of&nbsp;cookies do&nbsp;we&nbsp;use?</h3>
              <p>There are a&nbsp;number of&nbsp;different types of&nbsp;cookies, however, our website uses:</p>
              <ul>
                <li><b>Functionality</b>&nbsp;&mdash; Company uses these cookies so&nbsp;that we&nbsp;recognize you
                  on&nbsp;our website and remember your previously selected preferences. These could include what
                  language you prefer and the location you are&nbsp;in. A&nbsp;mix of&nbsp;first-party and third-party
                  cookies are used.
                </li>
                <li><b>Advertising</b>&nbsp;&mdash; Company uses these cookies to&nbsp;collect information about your
                  visit to&nbsp;our website, the content you viewed, the links you followed, and information about your
                  browser, device, and your&nbsp;IP address. The company sometimes shares some limited aspects
                  of&nbsp;this data with third parties for advertising purposes. We&nbsp;may also share online data
                  collected through cookies with our advertising partners. This means that when you visit another
                  website, you may be&nbsp;shown advertising based on&nbsp;your browsing patterns on&nbsp;our website.
                </li>
              </ul>
              <h3>How to&nbsp;manage cookies</h3>
              <p>You can set your browser not to&nbsp;accept cookies, and the above website tells you how to&nbsp;remove
                cookies from your browser. However, in&nbsp;a&nbsp;few cases, some of&nbsp;our website features may not
                function as&nbsp;a&nbsp;result.</p>
              <h3>Privacy policies of&nbsp;other websites</h3>
              <p>The company website contains links to&nbsp;other websites. Our privacy policy applies only to&nbsp;our
                website, so&nbsp;if&nbsp;you click on&nbsp;a&nbsp;link to&nbsp;another website, you should read their
                privacy policy.</p>
              <h3>How to&nbsp;contact&nbsp;us</h3>
              <p>If&nbsp;you have any questions about Our Company&rsquo;s privacy policy, the data we&nbsp;hold
                on&nbsp;you, or&nbsp;you would like to&nbsp;exercise one of&nbsp;your data protection rights, please
                do&nbsp;not hesitate to&nbsp;contact&nbsp;us.</p>
              <blockquote>
                Our core value is&nbsp;to&nbsp;be&nbsp;genuinely helpful and effective. We&nbsp;invest in&nbsp;our
                Team&rsquo;s development and education and constantly search for ways to&nbsp;further optimise and
                improve so&nbsp;that we&nbsp;can stay on&nbsp;top of&nbsp;our game.
                <br/><cite>&mdash;&nbsp;CTO Cado Labs</cite>
              </blockquote>

            </div>

          </div>
        </section>
        {fetcher.data ? <VacanciesList data={fetcher.data} /> : null}
      </div>
  );
}
