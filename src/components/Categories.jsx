import React from "react"
import "../assets/styles/components/Categories.scss"

const Categories = ({children, tittle}) =>(
    <div className="Categories">
        <h3 className="categories__title">{tittle}</h3>
        {children}
    </div>
)

export default Categories