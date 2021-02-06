import React from 'react';

interface TargetProps {
	str: any
}


export const Target: React.FC<TargetProps> = ({str}) => {
	const arrRuss: any = str.russia.split(' ')

	
	
	return (
		<div className="target">
            <div className="target__left">
                <img src="./img/1.png" alt="1"/>
				<img src="./img/2.png" alt="2"/>
            </div>
			<div className="target__right">
				{arrRuss.map((item: string, i: number) => (
					<span
						key={i}
						className="target__right-sp">
							{item}
					</span>
				))}
			</div>
        </div>
	);
}

