import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [dados, setDados] = useState([])
    useEffect(() => {
        axios.get('/api/genres').then(res => {
            setDados(res.data.data)
        })
    }, [])

    const deleteGenero = id => {
        axios.delete('/api/genres/' + id).then(res => {
            const filtrado = dados.filter(item => item.id !== id)
            setDados(filtrado) // atualizando o estado
        })
    }

    const renderizaLinha = registro => {
        return (
            <tr key={registro.id}>
                <th scope="row">{registro.id}</th>
                <td>{registro.name}</td>
                <td>
                    <button onClick={() => deleteGenero(registro.id)} className="btn btn-outline-danger">Remover</button>
                    <Link className="btn btn-outline-success ml-2" to={'/genre/' + registro.id}>Editar</Link>
                </td>
            </tr>
        )
    }

    if (dados.length === 0) {
        return (
            <div className="container">
                <div className="alert alert-warning" role="alert">
                    Você não possui gêneros criados!
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Gêneros</h1>
            <Link className="btn btn-outline-primary mt-4 mb-3" to="/genre/new">Novo Gênero</Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )
}
export default Generos
