import React from 'react'
import Article from '../components/Article'
import '../styles/HomePage.css'

const articles = [
    {
        id: 1,
        title: "czym jest koronawirus ?",
        author: " - Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam recusandae ea Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing quibusdam maxime modi tempore. Voluptate repudiandae, ratione vitae officiis, enim temporibus est eaque nemo corrupti quam dolor at?",
    },
    {
        id: 2,
        title: "Czym jest teoria strun ?",
        author: " - Andrzej Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam recusandae ea quibusdam maxime modi tempore. Voluptate repudiandae, ratione vitae officiis, enim temporibus est eaque nemo corrupti quam dolor at?",
    },
    {
        id: 3,
        title: "Czym jest kosmos ?",
        author: " - Adam Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam recusandae ea quibusdam maxime modi tempore. Voluptate repudiandae, ratione vitae officiis,Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing enim temporibus est eaque nemo corrupti quam dolor at?"
    }
]
const HomePage = () => {
    const artList = articles.map(article =>
        <Article key={article.id} {...article} />
    )
    return (
        <div>
            <div className="home">
                {artList}
            </div>
        </div>
    )
}

export default HomePage
