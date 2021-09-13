import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import reactocats from './reactodex'
import { Author } from './components/Author'

interface IOctocatProps {
  authors?: Author
  link?: string
  image?: string
  number?: number
  name?: string
}

class OctoApp extends Component<IOctocatProps> {
  convertOctocatObjectToComponent(octocat: {
    number: number
    name: string
    image: string
    link: string
    authors: Author
  }) {
    return (
      <Octocat
        number={octocat.number}
        name={octocat.name}
        image={octocat.image}
        link={octocat.link}
        authors={octocat.authors}
      />
    )
  }

  render() {
    const octocatsFromData = reactocats.data.map(
      this.convertOctocatObjectToComponent
    )

    return (
      <div>
        <Header />
        <main>
          <div className="octocat-container">{octocatsFromData}</div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default OctoApp
