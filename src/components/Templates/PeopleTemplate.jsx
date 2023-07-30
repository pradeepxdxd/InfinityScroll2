import React from 'react'

export default function PeopleTemplate({data}) {
    return (
        <>
            <h4>{data.id}</h4>
            <h4>{data.name}</h4>
            <h4>{data.desc}</h4>
            <hr />
        </>
    )
}
