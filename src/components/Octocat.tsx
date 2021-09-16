import React from 'react'
import { Author, AuthorType } from './Author'
// import Reactocats from './reactodex.json'

type OctocatProps = {
  number: number
  image: string
  name: string
  link: string
  authors: AuthorType[]
}
export function Octocat(props: OctocatProps) {
  return (
    <div>
      <figure>
        <a href={props.link}>
          <img src={props.image} alt="" />
        </a>
      </figure>

      <div className="item-footer">
        <div>
          <span>#{props.number}</span>
          <a href="#">{props.name}</a>
        </div>

        <div className="author-icon-list">
          {props.authors.map((author, index) => (
            <div key={index} className="container">
              <Author link={author.link} image={author.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
