import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
	return (
		<section
			id='about-us'
			className='justify-between flex items-center max-lg:flex-col gap-10 w-full max-container'
		>
			<div className='flex flex-1 flex-col'>
				<h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
					We Provide You
					<span className='text-coral-red'> Super</span>
					<span className='text-coral-red'> Quality</span> Shoes
				</h2>
				<p className='mt-4 lg:max-w-lg info-text text-justify'>
					Discover unparalleled quality in every step with our meticulously
					crafted shoes. Engineered with innovative materials and expert
					craftsmanship, our footwear ensures comfort, durability, and
					style for every occasion.
				</p>
				<p className='mt-6 lg:max-w-lg info-text text-justify'>
					Step into comfort, durability, and style with every pair today.
				</p>
				<div className='mt-11'>
					<Button label='View details' />
				</div>
			</div>
			<div className='flex flex-1 justify-center items-center'>
				<img
					src={shoe8}
					alt='superqualityshoe'
					width={570}
					height={522}
					className='object-contain'
				/>
			</div>
		</section>
	);
};
export default SuperQuality;
