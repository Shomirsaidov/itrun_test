import {React, useEffect, useState} from 'react'
import axios from 'axios'
import Card from './Card'

function Component() {
    const [data, setData] = useState([])
    useEffect(() => {
        const load = async() => {
            await axios.get("https://ktj3server.vercel.app/getMainData")
                .then(response => {
                    console.log(response.data)
                    setData(response.data.sales)
                })
                .catch(e => console.warn(e))
        }
        load()
    }, [])

    return (
        <div className="px-16 md:py-2 md:flex md:px-100 items-center">
            <div className='space-y-80'>
                {data.map(book => 
                        <Card book={book}/>
                    )}
            </div>
        </div>
    )

}

export default Component