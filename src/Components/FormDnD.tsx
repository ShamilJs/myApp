import React from 'react';

interface TargetProps {
	str: any
}

export const FormDnD:React.FC<TargetProps> = ({str}) => {

    const arrEnglish: any = str.english.split(' ');

    const dragStartHandler = (e: React.DragEvent, item: string) => {
		console.log('item: ', item);

    }

	const dragLeaveHandler = (e: React.DragEvent) => {

    }

	const dragEndHandler = (e: React.DragEvent) => {

    }

	const dragOverHandler = (e: React.DragEvent) => {
		e.preventDefault()
    }

	const dropHandler = (e: React.DragEvent, item: string) => {
		
		e.preventDefault()
		console.log('item: ', item);
    }

    return (
        <div className="form-dnd">
            <div className="form-dnd__up">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="form-dnd__down">
                {arrEnglish.map((item: string, i: number) => (
                    <div
                        key={i}
                        draggable={true}
                        onDragStart={e => dragStartHandler(e, item)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragEnd={e => dragEndHandler(e)}
						onDragOver={e => dragOverHandler(e)}
                        onDrop={e => dropHandler(e, item)}
                    >{item}
                    </div>
                ))}
            </div>
        </div>
    )
}