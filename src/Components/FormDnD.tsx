import React, { useRef, useState } from 'react';

interface TargetProps {
	str: any
}

export const FormDnD:React.FC<TargetProps> = ({str}) => {

    const arrEnglish: any = str.english.split(' ');

    const data: any = [
		{title: 'group1', items: arrEnglish},
		{title: 'group2', items: []},
		{title: 'group3', items: []},
		{title: 'group4', items: arrEnglish},
	]

	const [list, setList] = useState(data);
	console.log(list);
	
	const [stateGrp, setStateGrp] = useState<any>(null);
	console.log(stateGrp);
	const [stateItem, setStateItem] = useState<any>(null);
	console.log(stateItem);

    const dragStartHandler = (e: React.DragEvent, params: any): void => {
		setStateGrp(params.grp)
		setStateItem(params.item)
	}
	
	const dragLeaveHandler = (e: any): void => {
		e.target.style.boxShadow = 'none'
    }

	const dragEndHandler = (e: any): void => {
		e.target.style.boxShadow = 'none'
    }

	const dragOverHandler = (e: any): void => {
		e.preventDefault()
		if (e.target.className === 'form-dnd__items') {
			e.target.style.boxShadow = '0 2px 3px gray';
		}
    }

	const dropHandler = (e: React.DragEvent, params: any): void => {
		e.preventDefault()
		const currentIndex = stateGrp.items.indexOf(stateItem)
		stateGrp!.items.splice(currentIndex, 1)
		const dropIndex = params.grp.items.indexOf(params.item)
		params.grp.items.splice(dropIndex + 1, 0, stateItem)
		setList(list.map((b:any) => {
			if (b.title === params.grp.title) return params.grp
			if (b.title === stateGrp.title) return stateGrp
		}))
	}
	
    return (
        <div className="form-dnd">
            <div className="form-dnd">
                {list.map((grp: any, grpI:number) => (
					<div
						key={grp.title}
						className='form-dnd__up'
					>
						{grp.items.map((item: string, itemI: number) => (
							<div
								key={itemI}
								className='form-dnd__items'
								draggable
								onDragStart={e => dragStartHandler(e, {grp, item})}
								onDragLeave={e => dragLeaveHandler(e)}
								onDragEnd={e => dragEndHandler(e)}
								onDragOver={e => dragOverHandler(e)}
								onDrop={e => dropHandler(e, {grp, grpI, item, itemI})}
							>{item}
							</div>
						))}
					</div>
				))}
            </div>
        </div>
    )
}