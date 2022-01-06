import Cards from '../../assets/desktop/isocard.svg';
function Slogan() {
	return (
		<section className='relative text-36 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48'>
			<div className='text-center md:col-span-1 md:col-start-2'>
				<p className=''>
					Earn <span className='text-purple-300'>More</span>
				</p>
				<p className=''>Pay Less</p>
				<button className='text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]'>
					Start
				</button>
			</div>
			<div className='mt-[60px] flex justify-center items-center md:absolute right-[-5rem]'>
				<img src={Cards} alt='cards' />
			</div>
		</section>
	);
}

export default Slogan;
