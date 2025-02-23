import React from 'react'
import './Third.scss'
import Thirdd from '../../assets/img/third.jpg'
import Drigg from '../../assets/img/drigg.jpg'
import Joung from '../../assets/img/joung.jpg'
import Dianawith from '../../assets/img/dianawith.jpg'
import Finishthird from '../../assets/img/finishthird.jpg'

const Third = () => {
    return (
        <div className='third'>
            <div className='container'>
                <div className='third__body'>
                    <div className='third__third'>
                        <img src={Thirdd} alt='Third' />
                    </div>
                    <div className='third__title'>Дайна Ригг - самый красивый мститель. Была, есть и будет!</div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Drigg} alt='Diana Rigg' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Полное имя - Энид Дайана Элизабет.</div>
                                <div className='third__text'>Популярность молодой актрисе принес комедийный телесериал "Мстители" (1961-1969, Премия Британской киноакадемии, 1961, номинация на "Эмми"), в котором она сыграла Эмму Пил.</div>
                                <div className='third__text'>В 1988 году удостоена Ордена Британской Империи, в 1994 года - титула "Дама Командор".</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Joung} alt='Joung' />
                                </div>
                                <div className='third__text'>Её теледебют состоялся в апреле 1961 года показом второго акта театральной пьесы «Ондина». Первый кинофильм с её участием «Сон в летнюю ночь» вышел в 1969 году.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Dianawith} alt='Diana with' />
                                </div>
                                <div className='third__text'>Мировую известность ей принесли британский телесериал 1960-х годов «Мстители» и роль Трейси Бонд — девушки агента 007 в фильме «На секретной службе Её Величества».</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__titles'>The Avengers навсегда!</div>
                    <div className='third__from'>
                        <div className='third__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ogrgtzgn0oQ?si=Fd9CSJbs6-n6aiRS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='third__third'>
                        <img src={Finishthird} alt='Finish Third' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third