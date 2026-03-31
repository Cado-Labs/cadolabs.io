import { Link } from "react-router";
import type { VacancyRecord } from "../../types/vacancy";

export default function VacanciesList({ data }: { data: VacancyRecord[] }) {
    return (
        <section className="cado-looking-for">
            <div className="wrapper">
                <div className="header">
                    <h2>CADO is looking for</h2>
                    <div className="descr">If you are dynamic and motivated to do something big, check out our open
                        positions!
                    </div>
                    <div className="view-all">
                        <Link to="/career">
                            View all vacancies
                        </Link>
                    </div>
                </div>
                <ul>
                    {data.map((vacancy, index: number) => (
                        <li key={index}>
                            <div className="inner">
                                <Link
                                    title={vacancy.fields.url}
                                    key={vacancy.id}
                                    to={`/career/${vacancy.fields.slug}`}
                                    prefetch="intent"
                                >
                                    <div className="title">{vacancy.fields.card_title}</div>
                                    <div className="descr">{vacancy.fields.card_descr}</div>
                                </Link>
                            </div>
                        </li>
                    ))}
                    <li className="send-cv">
                        <a href="mailto:hr@cadolabs.io">Send your CV</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
