import type {ActionFunction, LoaderFunction, MetaFunction} from "remix";
import {Form, redirect, useLoaderData} from "remix";
import VacanciesList from "~/components/vacancies";

export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - contact",
  }
};


export const action: ActionFunction = async ({request}) => {
  const body = await request.formData();
  const baseUrl = new URL(request.url);
  const response = await fetch(`${baseUrl.origin}/api/airtable/sendMessage`, {
    method: 'POST',
    body: body,
  })
      .then(response => {return response.json()})
  .catch(e => {e.message});
  return redirect(`/contact`);
}

export const loader: LoaderFunction = async (context) => {
  const baseUrl = new URL(context.request.url);
  return await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
    method: "GET"
  });
}

export default function Contact() {
  const vacanciesList = JSON.parse(useLoaderData()).records;
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
                <p>For1 any inquiries please contact us at <a href="mailto:info@cadolabs.io">info@cadolabs.io</a></p>
                <Form reloadDocument method="post">
                  <div className="input-outer">
                    <input type="text" placeholder="Your name" name="name" required />
                  </div>
                  <div className="input-outer">
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="input-outer">
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Message" required />
                  </div>
                  <div className="input-outer">
                    <button type="submit" value="Send">Send</button>
                  </div>
                </Form>
            </div>
            </div>
          </div>
        </section>
        {vacanciesList ? <VacanciesList data={vacanciesList} /> : ''}
      </div>
);
}
