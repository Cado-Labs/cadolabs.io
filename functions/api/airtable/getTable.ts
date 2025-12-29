import getAccessToken from "../../utils/getAccessToken";
import sheetToVacancies from "../../utils/prepareTableData";

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
        const token = await getAccessToken(env);
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${env.GSHEET_ID}/values/Vacancies!A1:Z100`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const freshData = await res.json();
        info = JSON.stringify(sheetToVacancies(freshData as any));
        console.log('Get data from airtable');
        await context.env.KVDATA.put("tableRecords", info, {
            expirationTtl: 3600,
        });
    }

    const response = new Response(info);

    response.headers.set("Cache-Control", "max-age=3600");

    return response;
}
