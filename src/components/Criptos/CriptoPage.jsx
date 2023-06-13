import { useParams } from "react-router-dom"
import usePeticion from "../hooks/usePetision"
import "../../css/CriptoPage.css"
import HistoryCrip from "../info/HistoryCrip"
import InfoCrip from "../info/InfoCrip"

const CriptoPage = () => {

    const params = useParams()

      const [crip, cargandoCrip] = usePeticion(`assets/${params.id}`)
      const [history,cargandoHistoty] = usePeticion(`assets/${params.id}/history?interval=d1`)

      if(cargandoCrip || cargandoHistoty) return <span>Cargando...</span>

    return(
        <>
            <h1>{params.id}</h1>
            {crip && <InfoCrip crip={crip}/>}
            { history && <HistoryCrip history={history}/>}
        </>
    )
}

export default CriptoPage 