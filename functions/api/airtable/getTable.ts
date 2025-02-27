export async function onRequest(context) {
    const {
        env, // same as existing Worker API
    } = context;

    const kvDataValue = await context.env.KVDATA.get('tableRecords');
    let info = null;
    if (kvDataValue) {
        info = kvDataValue;
        console.log('Get data from KV');
    }


    if (!info) {
        const res = await fetch(`https://api.airtable.com/v0/${env.BASE_ID}/${env.VACANCY_TABLE}?maxRecords=99&view=Grid%20view`, {
            headers: {
                Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
            },
        })
        const freshData = await res.json();
        info = JSON.stringify(freshData);
        console.log('Get data from airtable');
        await context.env.KVDATA.put("tableRecords", info, {
            expirationTtl: 3600,
        });
    }

    const response = new Response(info);

    response.headers.set("Cache-Control", "max-age=3600");

    return response;
}
