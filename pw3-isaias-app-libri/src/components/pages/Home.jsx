import React from "react";
import style from "./Home.module.css";

const Home = ()=>{

    return(
            
    
        <section className = {style.home_container}>
            <h1>Bem vindo ao <span> LIBRI</span></h1>
            <p> sua plataforma web de gestão de livros!</p>
            <img className = {style.home_container} src ="./book_home.jpg"/>
        </section>

    )

}

export default Home