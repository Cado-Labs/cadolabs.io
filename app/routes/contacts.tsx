import type {ActionFunction, MetaFunction} from "remix";
import {Form, useFetcher, useTransition} from "remix";
import VacanciesList from "~/components/vacancies";
import {useEffect, useRef} from "react";

export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - contact",
  }
};


export const action: ActionFunction = async ({request}) => {
  await new Promise((res) => setTimeout(res, 2000));
  const body = await request.formData();
  const baseUrl = new URL(request.url);
  const response = await fetch(`${baseUrl.origin}/api/airtable/sendMessage`, {
    method: 'POST',
    body: body,
  })
      .then(response => {return response.json()})
      .catch(e => {e.message});
  return true;
}

export default function Contacts() {
  let transition = useTransition();
  let fetcher = useFetcher();
  let formRef = useRef();
  useEffect(() => {
        if (transition.state === 'loading') {
          formRef.current?.reset();
        }
        fetcher.load('/airtable/getTable');
      }, [transition]
  );
  return (
      <div>
        <section className="contact">
          <div className="wrapper">
            <h1>We are an IT company with a <span
                className="marked">high level of experience</span> in <b>consulting</b>, <b>software
              enhancement</b> and <b>business growth solutions</b>
            </h1>
            <div className="contact-form">
              <div className="contact-form-inner">
                <h2>Let’s talk</h2>
                <p>For any inquiries please contact us at <a href="mailto:info@cadolabs.io">info@cadolabs.io</a></p>
                <Form ref={formRef} method="post">
                  <div className="input-outer">
                    <input type="text" placeholder="Your name" name="name" required />
                  </div>
                  <div className="input-outer">
                    <input type="email" placeholder="Email" name="email" pattern="^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$" required />
                  </div>
                  <div className="input-outer">
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Message" required />
                  </div>
                  <div className="input-outer">
                    <button type="submit" value="Send">Send</button>
                  </div>
                  {transition.state === "submitting" &&
                  <div className="form-message">
                    <p>Your message has been sent</p>
                  </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </section>
        {fetcher.data ? <VacanciesList data={fetcher.data} /> : null}
      </div>
  );
}
