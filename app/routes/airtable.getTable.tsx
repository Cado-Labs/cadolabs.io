export const loader = async  ({request}) => {
    const baseUrl = new URL(request.url);
    return await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
        method: "GET"
    });
}
