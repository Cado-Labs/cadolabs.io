import getAccessToken from "../../utils/getAccessToken";

export async function onRequestPost(context: any) {
    const {
        env,
        request
    } = context;

    const bodyData = await request.formData();
    const message = {
        name: bodyData.get('name') as string,
        email: bodyData.get('email') as string,
        message: bodyData.get('message') as string,
        date: new Date().toISOString(),
    };

    const token = await getAccessToken(env);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${env.GSHEET_VACANCIES_ID}/values/Feedbacks!A1:append?valueInputOption=USER_ENTERED`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            majorDimension: "ROWS",
            values: [
                [
                    message.date,
                    message.name || '',
                    message.email || '',
                    message.message || ''
                ]
            ],
        }),
    });

    if (!response.ok) {
        const errorDetail = await response.json() as any;

        return new Response(JSON.stringify(errorDetail), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return response;
}