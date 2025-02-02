import React from "react"
import PropTypes from "prop-types"
import playIcon from "../assets/static/play-icon.png"
import plusIcon from "../assets/static/plus-icon.png"

import "../assets/styles/components/Carouselitem.scss"

const Carouselitem = ({cover, tittle, year, contenRating, duration}) =>(
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={tittle}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{tittle}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contenRating} ${duration}`}</p>
        </div>
      </div>
)

Carouselitem.propTypes={
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default Carouselitem