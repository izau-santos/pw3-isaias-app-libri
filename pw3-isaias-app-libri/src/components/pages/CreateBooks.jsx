import React from "react";
import style from  "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = ()=>{

    return(
        <section className={style.create_books_container}>
            <h1> Create Books</h1>

        <Input
            type="text"
            name="txt_livro"
            placeHolder="Digite o nome do livro"
            text="Titulo do livro"
        />
        <Input
            type="text"
            name="txt_autor"
            placeHolder="Digite o nome do autor"
            text="autor do livro"
        />
        <Input
            type="text"
            name="txt_descricao_livro"
            placeHolder="Digite a descricao do livro"
            text="descricao do livro"
        />

        <Select
            name="categoria"
            text="Escolha uma categoria do livro"
        />

        <Button
            rotulo="Cadastrar Livro"
        />
        

        </section>
    )
}

export default CreateBooks  