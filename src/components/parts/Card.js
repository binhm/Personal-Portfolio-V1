import React from 'react'
import "./Card.scss"
import sprite from "../../assets/sprites.svg"

const Card = ({
    icon,
    children,
    style,
    cardBack
}) => {
  return (
<>
    <div className="about-card">
        {children}
        
        <div class="about-background">
            <div class="tiles">
                <div class="tile tile-1"></div>
                <div class="tile tile-2"></div>
                <div class="tile tile-3"></div>
                <div class="tile tile-4"></div>

                <div class="tile tile-5"></div>
                <div class="tile tile-6"></div>
                <div class="tile tile-7"></div>
                <div class="tile tile-8"></div>

                <div class="tile tile-9"></div>
                <div class="tile tile-10"></div>
            </div>

            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
            </div>
    </div>
</>
  )
}

export default Card;