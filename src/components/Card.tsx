import React, { FC, useState } from 'react'

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?:string,
    height?:string,
    variant?: CardVariant,
    onClick: (num:number)=> void,
    
    children: React.ReactChild | React.ReactNode,
}


export const Card: FC<CardProps> = ({width,height,variant,onClick,children}) => {
    const [number, setNumber] = useState(0)
    
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid lightgray':'none',
            background: variant === CardVariant.primary ? 'lightgray':'none'
        }}
            onClick = {()=> onClick(number)}
        >
            {children}
        </div>
    )
}