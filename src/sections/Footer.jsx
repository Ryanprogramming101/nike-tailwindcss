import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
	return (
		<footer className='max-container'>
			<div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
				<div className='flex flex-col items-start'>
					<a href='/'>
						<img
							src={footerLogo}
							alt='footerLogo'
							width={150}
							height={46}
						/>
					</a>
					<p className='text-white-400 mt-6 text-base font-montserrat leading-7 sm:max-w-sm'>
						Get shoes ready for the new season at your nearest Nike store.
					</p>
					<div className='flex items-center mt-8 gap-5'>
						{socialMedia.map((icon) => (
							<div
								className='flex justify-center items-center w-12 h-12 rounded-full bg-white'
								key={icon.src}
							>
								<img
									src={icon.src}
									alt={icon.alt}
									width={24}
									height={24}
								/>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
					{footerLinks.map((section) => (
						<div key={section}>
							<h4 className='text-white text-2xl font-montserrat mb-4 leading-normal font-medium'>
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										className='text-white-400 mt-1 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer'
										key={link.name}
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className='flex justify-between mt-24 text-white-400 max-sm:flex-col  max-sm:items-center'>
				<div className='flex flex-1 justify-start font-montserrat items-center gap-2 cursor-pointer'>
					<img
						src={copyrightSign}
						alt='copyright sign'
						width={20}
						height={20}
						className='rounded-full m-0'
					/>
					<p>Copyright. All rights reserved.</p>
				</div>
				<p className='font-montserrat cursor-pointer'>
					Terms and Conditions
				</p>
			</div>
		</footer>
	);
};
export default Footer;
