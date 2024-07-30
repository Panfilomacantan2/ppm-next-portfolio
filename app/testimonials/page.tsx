import SectionHeading from '@/components/SectionHeading';
import { InfiniteMovingCardsDemo } from '@/components/TestimonialCards';
import React from 'react';

const Testimonialpage = () => {
	return (
		<div className="overflow-x-hidden">
			<SectionHeading text="Testimonials" className="my-10" />

			<p className='text-center dark:text-gray-400 mb-5'>These are the testimonials of my clients.</p>

			<InfiniteMovingCardsDemo />
		</div>
	);
};

export default Testimonialpage;
