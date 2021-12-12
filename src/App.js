import React from 'react';
import Review from './Review';

function App() {
	return (
		<main>
			<header className='title'>
				<h2 className='loading'>Our Reviews</h2>
				<div className='underline'></div>
			</header>
			<Review />
		</main>
	);
}

export default App;
