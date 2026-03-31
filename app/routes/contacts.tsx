import type { MetaFunction } from "react-router";
import { Form, useNavigation } from "react-router";
import VacanciesList from "~/components/vacancies";
import {useEffect, useRef} from "react";
import { data } from "react-router";
import { resolveAppEnv } from "~/utils/env.server";
import { useVacancies } from "~/utils/root-data";
import { sendFeedback } from "~/utils/feedback.server";
import type { AppEnv } from "../../types/env";

export const meta: MetaFunction = () => {
  return [{ title: "Cadolabs - contact" }];
};

type ActionArgs = {
  request: Request;
  context: {
    cloudflare: {
      env: AppEnv;
    };
  };
};

export async function action({ request, context }: ActionArgs) {
  await new Promise((res) => setTimeout(res, 2000));
  const response = await sendFeedback(resolveAppEnv(context), await request.formData());

  if (!response.ok) {
    const errorDetail = await response.json() as unknown;

    return data(errorDetail, { status: response.status });
  }

  return data({ ok: true });
}

export default function Contacts() {
  let navigation = useNavigation();
  const vacancies = useVacancies();
  let formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (navigation.state === 'loading') {
      formRef.current?.reset();
    }
  }, [navigation.state]);
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
                    <textarea name="message" id="" cols={30} rows={7} placeholder="Message" required />
                  </div>
                  <div className="input-outer">
                    <button type="submit" value="Send">Send</button>
                  </div>
                  {navigation.state === "submitting" &&
                  <div className="form-message">
                    <p>Your message has been sent</p>
                  </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </section>
        {vacancies.length ? <VacanciesList data={vacancies} /> : null}
      </div>
  );
}
