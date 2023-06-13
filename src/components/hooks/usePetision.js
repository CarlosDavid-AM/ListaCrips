import axios from "axios"
import { useEffect, useState } from "react"

const usePeticion = (enpoint) => {

    const [crip, setCrip] = useState()
    const [cargando, setCargando] = useState(false)

    const URL_API = import.meta.env.VITE_URL_API

    useEffect(() => {

        setCargando(true)

        axios.get(`${URL_API}${enpoint}`)
        .then((dato) => {
          setCargando(false)
          setCrip(dato.data.data)
        })
        .catch((e) => {
          setCargando(false)
          console.error(e)
        })
      }, [])

    return [crip, cargando]
}

export default usePeticion