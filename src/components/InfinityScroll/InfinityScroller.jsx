import React, { useEffect, useState } from 'react'
import InfinityScrollTemplate from './InfinityScrollTemplate';

export default function InfinityScroller({ api, limit, Templete }) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [key] = useState(0)

    useEffect(() => {
        const fetchApi = async () => {
            const resp = await api(page, limit);
            setData(resp);
        }
        fetchApi();
    }, [])

    const fetchData = () => {
        setPage(page + 1);
        const fetchApi = async () => {
            const resp = await api(page, limit);
            setData(data.concat(resp));
        }
        fetchApi();
    }

    return (
        <>
            <ol>
                {
                    data?.map(post =>
                        <Templete key={key + 1} data={post} />
                    )
                }
            </ol>
            <div>
                <InfinityScrollTemplate length={data.length} fetchData={fetchData} />
            </div>
        </>

    )
}
