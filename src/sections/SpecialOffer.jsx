import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffer = () => {
	return (
		<section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
			<div className='flex-1'>
				<img
					src={offer}
					alt='offer'
					width={773}
					height={687}
					className='object-contain w-full'
				/>
			</div>
			<div className='flex flex-1 flex-col'>
				<h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
					<span className='text-coral-red'>Special</span> Offer
				</h2>
				<p className='mt-4 lg:max-w-lg info-text text-justify'>
					Embark on our special offer sales feature exclusive discounts on
					top-quality footwear and apparel, perfect for athletes and
					fashion enthusiasts alike. From limited-time promotions on iconic
					sneakers to seasonal clearance events, Nike ensures you can find
					your favorite styles at competitive prices.
				</p>
				<p className='mt-6 lg:max-w-lg info-text text-justify'>
					Don't miss out — explore Nike's special offers today and elevate
					your wardrobe with unmatched quality and style
				</p>
				<div className='mt-11 flex flex-wrap gap-4'>
					<Button label='Shop now' iconURL={arrowRight} />
					<Button
						label='Learn more'
						backgroundColor='bg-white'
						textColor='text-slate-gray'
						borderColor='border-slate-gray'
					/>
				</div>
			</div>
		</section>
	);
};
export default SpecialOffer;
