import { Link } from 'remix';

export default function VacanciesList(data) {
    return (
        <section className="cado-looking-for">
            <div className="wrapper">
                <div className="header">
                    <h2>CADO is looking for</h2>
                    <div className="descr">If you are dynamic and motivated to do something big, check out our open
                        positions!
                    </div>
                    <div className="view-all"><a href="/careers">View all vacancies</a></div>
                </div>
                <ul>
                    {data.data.map((vacancy, index) => (
                        <li key={index}>
                            <div className="inner">
                                <Link
                                    title={vacancy.fields.url}
                                    key={vacancy.id}
                                    to={`/careers/${vacancy.id}`}
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
