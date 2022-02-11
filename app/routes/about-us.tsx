import type {MetaFunction} from "remix";
import {useFetcher} from "remix";
import VacanciesList from "~/components/vacancies";
import {useEffect} from "react";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - about us",
  }
};

export default function About() {
    let fetcher = useFetcher();
    useEffect(() => {
      fetcher.load('/airtable/getTable');
    }, []);
    return (
        <div>
          <section className="about-us">
            <div className="wrapper">
              <h1>We are an IT company with a <span className="marked">high level of experience</span> in <b>consulting</b>, <b>software enhancement</b> and <b>business growth solutions</b>
              </h1>
              <p>
                CADO is&nbsp;an&nbsp;outsourcing company with a&nbsp;product company approach
                and go-getter attitude.
              </p>
            </div>
          </section>
          <section className="cado-belives">
            <div className="wrapper">
              <div className="inner">
                <h2>CADO BELIVES IN</h2>
                <ul>
                  <li>
                    <div>remote teams and <b>flexible schedule</b></div>
                  </li>
                  <li>
                    <div>constant and only useful <b>learning</b></div>
                  </li>
                  <li>
                    <div>personal <b>responsibility</b> and goal oriented work</div>
                  </li>
                  <li>
                    <div>honest two-way street <b>feedback</b> between the Company and the Team</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="cado-can">
            <div className="wrapper">
              <h2>CADO CAN</h2>
              <p>
                And you might think we&nbsp;can&rsquo;t do&nbsp;much and fast since we&nbsp;are quite small, but
                we&nbsp;are about to&nbsp;tell you why we&nbsp;can:
              </p>
              <p>
                We&nbsp;have <b>several major clients</b> and we&nbsp;cover all their development needs. And for sure,
                this is&nbsp;a&nbsp;match made in&nbsp;heaven.
              </p>
              <p>
                We&nbsp;code <b>to&nbsp;boost the business</b>. There is&nbsp;no&nbsp;development for the sake
                of&nbsp;development here!
              </p>
              <p>
                Our recruiters work hard <b>to&nbsp;hire the best crowd</b> and the rest of&nbsp;the team makes sure
                it&nbsp;wants to&nbsp;stay with&nbsp;us!
              </p>
              <p>
                At&nbsp;<b>Cado Labs</b> we&nbsp;know that the Future is&nbsp;Open Source, therefore we&nbsp;actively use
                open source solutions in&nbsp;our work. Not just that we&nbsp;use and support open source products,
                we&nbsp;contribute ourselves. You can have a&nbsp;look at&nbsp;some of&nbsp;our code in&nbsp;our GitHub
                account and also check out our Tech Radar
              </p>
            </div>
          </section>
          <section className="cado-do">
            <div className="wrapper">
              <h2>CADO DO</h2>
              <ul>
                <li>
                  <div className="inner">
                    <div className="title">Traffic Management Systems</div>
                    <div className="descr">to boost your growth!</div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="title">CRM Platforms</div>
                    <div className="descr">to bring some order to your Data!</div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="title">Payment systems</div>
                    <div className="descr">we know how to make money work for you!</div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="title">BI Systems</div>
                    <div className="descr">our secrets to a good night's sleep</div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="title">Anti-Fraud Solutions</div>
                    <div className="descr">our secrets to the BEST night's sleep</div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="title">Machine Learning Products</div>
                    <div className="descr">for the love of Robots!</div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {fetcher.data ? <VacanciesList data={fetcher.data} /> : null}
        </div>
    );
}
