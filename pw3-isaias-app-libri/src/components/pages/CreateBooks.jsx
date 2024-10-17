import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {

    /* DEFINE OS STATES DADOS DAS CATEGORIAS*/

    const [categorias, SetCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
        console.log(book)
    }

    function handlerChangeCategory(event) {
        setBook({ ...book,cod_categoria : event.target.value });
        console.log(book)
    }

    // Recupera os dados de categorias da apirest
    useEffect(() => {
        fetch('http://localhost:5000/listagemCateorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow_Headers': '*'
            }
        }).then(
            (response) =>
                // console.log('RESPOSTA' + response)
                response.json()

        ).then(
            (data) => {
                console.log('DATA:' + data)
                SetCategorias(data.data)
            }
        )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }, []);


    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createBook(book) {

        // console.log(JSON.stringify(book))

        fetch('http://localhost:5000/inserirLivro', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(book)
        })
            .then(
                (resp) => resp.json()
            )
            .then(
                (data) => {
                    console.log(data);
                    // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                }
            )
            .catch(
                (err) => { console.log(err) }
            )
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createBook(book);
    }

    return (
        <section className={style.create_books_container}>
            <h1> Create Books</h1>
            <form onSubmit={submit}>

            <Input
                type="text"
                name="nome_livro"
                placeHolder="Digite o nome do livro"
                text="Titulo do livro"
                handlerChangeBook={handlerChangeBook}
            />
            <Input
                type="text"
                name="nome_autor"
                placeHolder="Digite o nome do autor"
                text="autor do livro"
                handlerChangeBook={handlerChangeBook}
            />
            <Input
                type="text"
                name="descricao_livro"
                placeHolder="Digite a descricao do livro"
                text="descricao do livro"
                handlerChangeBook={handlerChangeBook}
            />

            <Select
                name="categoria"
                text="Escolha uma categoria do livro"
                options={categorias}
                handlerChangeCategory={handlerChangeCategory}

            />

            <Button
                rotulo="Cadastrar Livro"
            />
    </form>

        </section>
    )
}

export default CreateBooks; 