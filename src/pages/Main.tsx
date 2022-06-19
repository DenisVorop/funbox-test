import React from 'react'

import Card from '../components/Card'

import { TCard } from '../types/types'

import './main.scss'

const cards: TCard[] = [
    {
        title: 'Нямушка',
        label: 'Сказочное заморское яство',
        taste: 'с фуа-гра',
        infos: [
            { amount: '10', text: 'порций' },
            { amount: '1', text: 'мышь в подарок' },
        ],
        weight: '0,5',
        status: [
            { status: 'default', text: 'Чего сидишь? Порадуй котэ,', action: 'купи' },
            { status: 'selected', text: 'Печень утки разварная с артишоками.', action: null },
            { status: 'disabled', text: 'Печалька, с фуа-гра закончился.', action: null },
        ],
    },
    {
        title: 'Нямушка',
        label: 'Сказочное заморское яство',
        taste: 'с рыбой',
        infos: [
            { amount: '40', text: 'порций' },
            { amount: '2', text: 'мыши в подарок' },
        ],
        weight: '2',
        status: [
            { status: 'default', text: 'Чего сидишь? Порадуй котэ,', action: 'купи' },
            { status: 'selected', text: 'Головы щучьи с чесноком да свежайшая сёмгушка.', action: null },
            { status: 'disabled', text: 'Печалька, с рыбой закончился.', action: null },
        ],
    },
    {
        title: 'Нямушка',
        label: 'Сказочное заморское яство',
        taste: 'с курой',
        infos: [
            { amount: '100', text: 'порций' },
            { amount: '5', text: 'мышей в подарок' },
            { amount: null, text: 'заказчик доволен' },
        ],
        weight: '5',
        status: [
            { status: 'default', text: 'Чего сидишь? Порадуй котэ,', action: 'купи' },
            { status: 'selected', text: 'Филе из цыплят с трюфелями в бульоне.', action: null },
            { status: 'disabled', text: 'Печалька, с курой закончился.', action: null },
        ],
    },
]

const Main: React.FC = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__title">Ты сегодня покормил кота?</div>
                <div className="main__cards">
                    {cards.map(card => (
                        <div className="main__card" key={card.taste}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main
