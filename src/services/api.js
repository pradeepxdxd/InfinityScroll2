// eslint-disable-next-line no-undef
export const fetchApi = async (page, limit=10) => {
    const resp = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`);
    const result = await resp.json();
    return result.data;
}
