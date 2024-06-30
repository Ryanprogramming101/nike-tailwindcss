import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={imgURL}
				alt='customer'
				className='rounded-full object-cover w-[120px] h-[120px]'
			/>
			<p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
			<div className='flex mt-3 gap-2.5 text-center justify-center'>
				<img
					src={star}
					alt='star'
					width={24}
					height={24}
					className='object-contain m-0'
				/>
				<p className='text-xl font-montserrat text-slate-gray'>
					({rating})
				</p>
			</div>
			<h3 className='mt-2 font-bold font-palanquin text-2xl'>
				{customerName}
			</h3>
		</div>
	);
};
export default ReviewCard;
