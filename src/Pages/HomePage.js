import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

function App() {
    const [mainData, setMainData] = useState({sales: [], newBooks: [], top: []})
    const [expandedSales, setSalesExpand] = useState(false)
    const [expandedNew, setNewExpand] = useState(false)
    const [expandedTop, setTopExpand] = useState(false)


    useEffect(() => {
        (async()=> {
          await axios.get("https://ktj3server.vercel.app/getMainData")
            .then(data => {
                console.log(data.data)
                setMainData(data.data)
            })
    
        })()
        
      }, []);

      const expandToggle = (category) => {
        switch(category) {
            case "sales":
                setSalesExpand(!expandedSales)
            case "new":
                setNewExpand(!expandedNew)
            case "top":
                setTopExpand(!expandedTop)
        }
      }

   

    return (
        <div className='md:px-64 py-8 space-y-4'>
            <h1 className='text-2xl text-center font-bold p-2'>Скидки</h1>
           <div className='overflow-y-hidden space-y-2' style={{maxHeight: expandedSales ? '2000000px' : '450px'}}> 
                {mainData.sales.map((el) =>
                    
                        <div className='flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-xl
                        space-y-4'>
                            <img src={el.cover} width={80}/>
                            <h4 data-testid="bookName" className='text-md'>{el.name}</h4>
                        </div>
                )}   
            </div>
            <h1 onClick={() => expandToggle('sales')} className='cursor-pointer text-xl text-blue-700 text-center p-4 bg-gray-200'>{ expandedSales ? 'Скрыть' : 'Показать больше'}</h1>

            <h1 className='text-2xl text-center font-bold p-2'>Новые</h1>
            <div className='overflow-y-hidden space-y-2' style={{maxHeight: expandedNew ? '2000000px' : '450px'}}> 
                {mainData.newBooks.map((el) =>
                    
                        <div className='flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-xl
                        space-y-4'>
                            <img src={el.cover} width={80}/>
                            <h4 className='text-md'>{el.name}</h4>
                        </div>
                )}   
            </div>
            <h1 onClick={() => expandToggle('new')} className='cursor-pointer text-xl text-blue-700 text-center p-4 bg-gray-200'>{ expandedNew ? 'Скрыть' : 'Показать больше'}</h1>



            <h1 className='text-2xl text-center font-bold p-2'>Топ продажи</h1>
            <div className='overflow-y-hidden space-y-2' style={{maxHeight: expandedTop ? '2000000px' : '450px'}}> 
                {mainData.sales.map((el) =>
                    
                        <div className='flex flex-col justify-center items-center shadow-lg p-8 border-2 rounded-xl
                        space-y-4'>
                            <img src={el.cover} width={80}/>
                            <h4 className='text-md'>{el.name}</h4>
                        </div>
                )}   
            </div>
            <h1 onClick={() => expandToggle('top')} className='cursor-pointer text-xl text-blue-700 text-center p-4 bg-gray-200'>{ expandedTop ? 'Скрыть' : 'Показать больше'}</h1>


           
            
        </div>

       
    );
}

export default App;









