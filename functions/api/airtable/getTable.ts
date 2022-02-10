export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    const res = await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
    headers: {
            Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
        },
    })
    const data = await res.json();
    const info = JSON.stringify(data);
    return new Response(info);
}
