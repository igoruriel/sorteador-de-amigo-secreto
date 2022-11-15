
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Form/Formulario';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path='/' element={<Formulario />} ></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
