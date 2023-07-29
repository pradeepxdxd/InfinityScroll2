import React from 'react'

export default function Posts({post}) {
  return (
    <div key={post._id}>
        <li>{post._id}</li>
        <h4>{post.name}</h4>
        <h4>{post.airline[0].name}</h4>
        <h4>{post.airline[0].country}</h4>
        <h4>{post.airline[0].slogan}</h4>
        <a href={post.airline[0].website}>{post.airline[0].website}</a>
        <hr />
    </div>
)
}
