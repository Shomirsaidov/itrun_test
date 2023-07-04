import './App.css';
import {Route, Routes, NavLink} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Cards from './Pages/Card'
import New from './Pages/New'
import Sales from './Pages/Sales.js'
import Top from './Pages/Top'

function App() {
  return (
    <>
      <nav style={{position: 'sticky', top: 0, zIndex: 10}} className='flex justify-between items-center space-x-4 bg-gray-700 p-2 shadow-md'>
        <h1 className='font-bold font-italic text-lg text-white'>Varaq.tj</h1>
          <div className='flex items-center space-x-2'>
            <NavLink exact activeClassName="active" to={'/sales'} className='p-4 rounded-full text-white font-bold cursor-pointer'>Скидки</NavLink>  
            <NavLink activeClassName="active" to={'/new'} className='p-4 rounded-full text-white font-bold cursor-pointer'>Новые</NavLink>  
            <NavLink activeClassName="active" to={'/top'} className='p-4 rounded-full text-white font-bold cursor-pointer'>Топ</NavLink>  

          </div>          

      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/new" element={<New />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/top" element={<Top />} />

      </Routes>
    </>
  );
}

export default App;
