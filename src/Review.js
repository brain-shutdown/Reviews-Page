import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { id, name, image, job, text } = people[index];

	const prevReviewer = () => {
		setIndex((index) => (index - 1 + people.length) % people.length);
	};
	const nextReviewer = () => {
		setIndex((index) => (index + 1) % people.length);
	};
	const randomReviewer = () => {
		setIndex(() => {
			let randomIndex = null;
			do {
				randomIndex = Math.floor(Math.random() * people.length);
			} while (randomIndex === index);
			return randomIndex;
		});
	};

	return (
		<article className='container review' key={id}>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div>
				<FaChevronLeft className='prev-btn' onClick={prevReviewer} />
				<FaChevronRight className='next-btn' onClick={nextReviewer} />
			</div>
			<button className='random-btn' onClick={randomReviewer}>
				Surprise me
			</button>
		</article>
	);
};

export default Review;
