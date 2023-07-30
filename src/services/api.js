import {PASSENGER_URL, PEOPLE_URL, SOCIAL_MEDIA_URL} from '../constants/constant'

// eslint-disable-next-line no-undef
export const fetchApi = async (page, limit=10) => {
    // const resp = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`);
    const resp = await fetch(`${PASSENGER_URL}?page=${page}&size=${limit}`)
    const result = await resp.json();
    return result.data;
}

export const fetchPeople = async (page, limit=5) => {
    // const resp = await fetch(`http://localhost:3004/user`);
    const resp = await fetch(`${PEOPLE_URL}/user`);
    const data = await resp.json();

    const indexOfLastItem = (page+1) * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    
    return currentItems;
}

export const fetchSocialMediaPost = async (page) => {
    const resp = await fetch(`${SOCIAL_MEDIA_URL}/social-media-demo?page=${page+1}`);
    const result = await resp.json();
    // console.log(result);
    return result.posts;
}
