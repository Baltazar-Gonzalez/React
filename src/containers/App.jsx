import React from "react"
import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import Carouselitem from "../components/Carouselitem"
import Footer from "../components/Footer"
import useInitialState from "../hooks/useInitiaState"
import "../assets/styles/App.scss"

const API = "http://localhost:3000/initalState"

const App = () =>{
    const initialState = useInitialState(API)
    console.log(initialState)

    return(
        <div className="app">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
            <Categories tittle="Mi lista">
                <Carousel>
                    {initialState.mylist.map(item =>
                    <Carouselitem key={item.id} {...item}/>    
                    )}
                </Carousel>
            </Categories>
            }
            <Categories tittle="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                    <Carouselitem key={item.id} {...item}/>    
                    )}
                </Carousel>
            </Categories>
            <Categories tittle="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals.map(item =>
                    <Carouselitem key={item.id} {...item}/>    
                    )}
                </Carousel>
            </Categories>
            <Footer/>
        </div>

    )
}


export default App