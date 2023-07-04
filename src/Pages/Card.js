import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

import styles from '../styles.module.css'

export default function App({book}) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <a.div
        className={`${styles.c} ${styles.back} rounded-xl`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >

        <img src={book.cover} width={180}/>
        <h1 className='text-center py-2'>Смотреть</h1>
      </a.div>
      <a.div
        className={`${styles.c} ${styles.front} rounded-xl p-4`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >

        <h1 className='text-blue-600 font-bold text-lg'>{ book.cur_price } сомони</h1>
        <h1 className='text-blue-600'>{ book.author }</h1>
        <h1 className='text-blue-600'>{ book.age_restrictions }</h1>
        {
            book.tags.split(',').map(el => 
                
                <li className='text-blue-600'>{ el }</li>

                )
        }


      </a.div>
    </div>
  )
}






