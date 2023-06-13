import ReactDOM from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import Cuacricula from './Cuacricula'
import Bienvenida from './components/Bienvenida'
import CriptoPage from './components/Criptos/CriptoPage'
import Edesconosido from './components/Edesconosido'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route index element={<Bienvenida />} />
            </Route>
            <Route path='/criptonomedas' element={<App />}>
                <Route index element={<Cuacricula />} />
                <Route path=':id' element={<CriptoPage ></CriptoPage>} />
            </Route>
            <Route path='*' element={<Edesconosido />} />
        </Routes>
    </BrowserRouter>
)
