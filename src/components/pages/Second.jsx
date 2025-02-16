import React from 'react'
import './Second.scss'
import Diana from '../../assets/img/diana.jpg'
import Diana2 from '../../assets/img/diana2.jpg'
import Files from '../../assets/img/files.jpg'
import Thebest from '../../assets/img/thebest.jpg'
import Start from '../../assets/img/start.jpg'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__start'>
                        <img src={Start} alt='Start' />
                    </div>
                    <div className='second__title'>Первая видеозапись «Мстителей» состоялась 20 декабря 1960.</div>
                    <div className='second__diana'>
                        <img src={Diana} alt='Diana' />
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__files'>
                                    <img src={Files} alt='Files' />
                                </div>
                                <div className='second__text'>Мстители (англ. The Avengers) — английский телевизионный сериал компании АВС, рассказывающей о паре агентов, которым приходится распутывать сложные и невероятные преступления.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__thebest'>
                                    <img src={Thebest} alt='The best' />
                                </div>
                                <div className='second__text'> А также этим агентам приходится часто сталкиваться с суперзлодеями и фантастическими изобретениями учёных, поджидающими их на каждом шагу в экстравагантном мире Лондона.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__diana2'>
                        <img src={Diana2} alt='Diana' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second