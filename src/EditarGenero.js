import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = (props) => {
    const match = props.match

    const [genero, setGenero] = useState('')
    const [sucess, SetSucess] = useState(false)

    useEffect(() => {
        axios.get('/api/genres/' + match.params.id)
            .then(res => {
                setGenero(res.data.name)
            })
    }, [match.params.id])

    const onChange = event => {
        setGenero(event.target.value)
    }

    const save = () => {
        axios.put('/api/genres/' + match.params.id, {
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
            <h1>Editar Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="genero">Genero</label>
                    <input type="text" value={genero} onChange={onChange} className="form-control" id="genero" placeholder="Genero" />
                </div>
                <button type="submit" onClick={save} className="btn btn-outline-primary">Editar</button>
            </form>
        </div>
    )
}
export default EditarGenero