import { BaseColaboradores } from './api/bc'
import { useState } from 'react'

const App = () => {

  const [inputNombre, setInputNombre] = useState ("")
  const [inputEmail, setInputEmail] = useState ("")
  const [inputBuscar, setInputBuscar] = useState ("")

  const [listaColaboradores, SetlistaColaboradores] = useState (BaseColaboradores)

  const agregarColaborador = (e) => {
    e.preventDefault()

    SetlistaColaboradores([...listaColaboradores, {id: 1 + listaColaboradores.length, nombre: inputNombre, correo: inputEmail}])
    setInputNombre("")
    setInputEmail("")

  }

  const buscarColaborador = (e) => {
    e.preventDefault()
    const busquedaFiltro = listaColaboradores.filter((objeto) => objeto.nombre === inputBuscar)
    SetlistaColaboradores(busquedaFiltro)

  }

  return (
    <div>
      <div className='boxSearch p-5'>
        <h1>Buscador De Colaboradores</h1>
        <form onSubmit={buscarColaborador}>
          <input 
          type="text"
          placeholder='Buscar un colaborador'
          onChange={(e) => setInputBuscar(e.target.value)}
          />
        </form>
      </div>

      <div className='p-5'>

        <form className='d-flex flex-column justify-content-center' onSubmit={agregarColaborador}>
          <p>Nombre De Colaborador</p>
          <input
          placeholder='Ingrese su nombre'
          onChange={(e) => setInputNombre(e.target.value)}
          value={inputNombre}
          type="text" />
          <p className='mt-4'>Correo De Colaborador</p>
          <input
          placeholder='Ingrese su email'
          onChange={(e) => setInputEmail(e.target.value)}
          value={inputEmail}
          type="email" />
          <button type='submit' className='btn w-25 my-4 btn-primary pill pill-badge'>Agregar Colaborador</button>
        </form>
    
        <h3>Lista De Colaboradores</h3>
        <ul>
          {listaColaboradores.map(item =><li key={item.id}>{item.nombre} - {item.correo}</li>)}
        </ul>
      </div>
    </div>
  )

  
}

export default App