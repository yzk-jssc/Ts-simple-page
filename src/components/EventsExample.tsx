import React, { ChangeEvent, DragEvent, FC, MouseEvent, useState } from 'react'
import { CLIENT_RENEG_WINDOW } from 'tls';

interface EventsEvampleProps {
    
}
 
const EventsEvample: FC<EventsEvampleProps> = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const clickHandler = (e:MouseEvent<HTMLButtonElement>)=>{
        console.log(value)
    }

    const dragHandler = (e:DragEvent<HTMLDivElement>) =>{

    }

    const dropHandler = (e:DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    const dragLeaveHandler = (e:DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }

    const dragOver = (e:DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(true)
    }

    return ( 
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder={'enter smth'}/>
            <button onClick={clickHandler}>CLICK</button>
            <div 
                onDrag={dragHandler}
                draggable
                style={{width:'100px', height:'100px', background:'green'}}
            >

            </div>

            <div
                onDrop={dropHandler}
                onDragLeave ={dragLeaveHandler}
                onDragOver ={dragOver}

            style={{width:'100px', height:'100px', background: isDrag ?'blue' : 'green', marginTop:'10px'}}></div>
        </div>
     );
}
 
export default EventsEvample;