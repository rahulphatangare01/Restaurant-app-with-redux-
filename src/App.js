
import './App.css';
import Header from './componant/Header';
import Cards from './componant/Cards';
import CardsDetail from './componant/CardsDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
       <Route path='/' element={<Cards/>} />
       <Route path='/cart/:id' element={<CardsDetail/>}/ >
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
