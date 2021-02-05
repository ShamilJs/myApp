import React from 'react';

import './App.css';
import { FormDnD } from './Components/FormDnD';
import { Target } from './Components/Target';

const App: React.FC = () => {

	const stringRes: any = {
		russia: 'Привет мир',
		english: 'Hello world'
	}

	return (
		<div className="container">
			<h1>Translate this sentence</h1>
			<Target str={stringRes}/>
			<FormDnD str={stringRes}/>
		</div>
	);
}

export default App;
