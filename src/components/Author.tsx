import React from 'react'

export type AuthorType = {
  link: string
  image: string
}

export function Author(props: AuthorType) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="" />
    </a>
  )
}
