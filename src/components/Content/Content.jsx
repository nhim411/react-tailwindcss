import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';

function Content() {
	const customer = useSpring({ customers: 10000, from: { customers: 0 } });
	const card = useSpring({ cards: 8000, from: { cards: 0 } });
	return (
		<div>
			<section className='md:flex md:flex-row'>
				<div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[20px] md:w-[20%]'>
					<div className='mt-16 gap-8 flex items-start'>
						<FaUser size={'22px'} className='mt-[12px]' />
						<div className='text-26'>
							<animated.div>{customer.customers.to((val) => Math.floor(val))}</animated.div>
							<p className='text-13 font-semibold mb-[36px] md:text-16'>Customer</p>
						</div>
					</div>
					<div className='mt-16 gap-8 flex items-start'>
						<BsFillCreditCardFill size={'22px'} className='mt-[12px]' />
						<div className='text-26'>
							<animated.div>{card.cards.to((val) => Math.floor(val))}</animated.div>
							<p className='text-13 font-semibold mb-[36px] md:text-16'>Issued</p>
						</div>
					</div>
				</div>
				<div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%] md:mt-0'>
					<div className='check-content'>
						<img src={checkIconMobile} alt='check point' />
						<p className=''>Card reports sent to your phone every weeks</p>
					</div>
					<div className='check-content'>
						<img src={checkIconMobile} alt='check point' />
						<p className=''>No external fees</p>
					</div>
					<div className='check-content'>
						<img src={checkIconMobile} alt='check point' />
						<p className='block'>Set spending limits and restrictions</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Content;
