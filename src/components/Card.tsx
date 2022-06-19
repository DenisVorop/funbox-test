import React from 'react'
import cn from 'classnames'

import { TCard } from '../types/types'

import './card.scss'

interface CardProps {
    card: TCard
}

const Card: React.FC<CardProps> = ({ card }) => {
    const [status, setStatus] = React.useState<string>('default')

    const toggleStatus = () => {
        switch (status) {
            case 'default':
                setStatus('selected')
                break
            case 'selected':
                setStatus('disabled')
                break
            case 'disabled':
                setStatus('default')
                break
        }
    }

    return (
        <div className="card">
            <div className={cn('card__body', {
                'border-def': status === 'default',
                'border-sel': status === 'selected',
                'border-dis': status === 'disabled',
            })}
                onClick={toggleStatus}
            >
                <div className="card__label">{card.label}</div>
                <div className="card__title">{card.title}</div>
                <div className="card__taste">{card.taste}</div>
                <div className="card__infos">
                    <ul>
                        {card.infos.map(info => (
                            <li key={info.text}><span>{info.amount}</span> {info.text}</li>
                        ))}
                    </ul>
                </div>
                <div className={cn('card__weight', {
                    'bc-def': status === 'default',
                    'bc-sel': status === 'selected',
                    'bc-dis': status === 'disabled',
                })}>
                    {card.weight} <span>кг</span></div>
            </div>
            <div className={cn('', { 'bc-opacity': status === 'disabled' })}></div>
            {card.status
                .filter(cardStatus => cardStatus.status.includes(status))
                .map(cardStatus => (
                    <div className={cn('card__text', {
                        'color-dis': status === 'disabled',
                    })} key={cardStatus.status}>
                        {cardStatus.text} {cardStatus.action
                            ? <span><p onClick={() => setStatus('selected')}>{cardStatus.action}</p>.</span>
                            : null}
                    </div>
                ))
            }
        </div>
    )
}

export default Card
