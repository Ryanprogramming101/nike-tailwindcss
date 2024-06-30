import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {
	return (
		<section className='max-container'>
			<h3 className='font-palanquin text-center text-4xl font-bold'>
				What Our
				<span className='text-coral-red'> Customers </span>
				Say?
			</h3>
			<p className='text-info text-center mt-4 m-auto max-w-lg'>
				Hear real feedbacks from our satisfied customers.
			</p>
			<div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
				{reviews.map((review) => (
					<ReviewCard key={review.imgURL} {...review} />
				))}
			</div>
		</section>
	);
};
export default CustomerReviews;
