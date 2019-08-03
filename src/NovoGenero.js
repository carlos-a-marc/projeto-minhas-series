import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [genero, setGenero] = useState('')
    const [sucess, SetSucess] = useState(false)

    const onChange = event => {
        setGenero(event.target.value)
    }

    const save = () => {
        axios.post('/api/genres', {
            name: genero
        }).then(res => {
            SetSucess(true)
        })
    }

    if (sucess) {
        return <Redirect to="/genre" />
    }

    return (
        <div className="container">
            <h1>Novo Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="genero">Genero</label>
                    <input type="text" value={genero} onChange={onChange} className="form-control" id="genero" placeholder="Genero" />
                </div>
                <button type="submit" onClick={save} className="btn btn-outline-primary">Adicionar</button>
            </form>
        </div>
    )
}
export default NovoGenero