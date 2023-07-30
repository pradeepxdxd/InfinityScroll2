import React from 'react'

export default function Posts({ data }) {
    return (
        <div key={data._id}>
            <li>{data._id}</li>
            <h4>{data.name}</h4>
            <h4>{data.airline[0].name}</h4>
            <h4>{data.airline[0].country}</h4>
            <h4>{data.airline[0].slogan}</h4>
            <a href={data.airline[0].website}>{data.airline[0].website}</a>
            <hr />
        </div>
    )
}
