const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
			<div className='bg-coral-red justify-center items-center rounded-full w-11 h-11 flex'>
				<img src={imgURL} alt={label} width={24} height={24} />
			</div>
			<h3 className='mt-5 font-palanquin leading-normal font-bold text-2xl'>
				{label}
			</h3>
			<p className='font-montserrat text-lg text-slate-gray mt-3 leading-normal break-words'>
				{subtext}
			</p>
		</div>
	);
};
export default ServiceCard;
