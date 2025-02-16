import React from 'react'
import './Main.scss'
import Advengers from '../../assets/img/avengers.jpg'
import Girls from '../../assets/img/girls.jpg'
import Thetwo from '../../assets/img/thetwo.jpg'
import Botton from '../../assets/img/bottom.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__advengers'>
                        <img src={Advengers} alt='Advengers' />
                    </div>
                    <div className='main__girls'>
                        <img src={Girls} alt='Girls' />
                    </div>
                    <div className='main__thetwo'>
                        <img src={Thetwo} alt='The two' />
                    </div>
                    <div className='main__bottom'>
                        <img src={Botton} alt='Bottom' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main