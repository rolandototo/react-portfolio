import React, { Component } from 'react'

export default class portarticle extends Component {
  render() {
    return (
      <>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={this.props.imgTranfer} alt="" />
        </div>
        <h3>{this.props.titlePort}</h3>
        <div className="portfolio__item-cta">
          <a href={this.props.urlPortGit} className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
        </div>
      </article>
      </>
    )
  }
}
