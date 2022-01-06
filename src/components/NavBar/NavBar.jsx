import { useState } from 'react';
import useDarkMode from '../hook/useDarkMode';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
function NavBar(props) {
	const { isMobile } = props;
	const [openMenu, setOpenMenu] = useState(false);
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const handleMenu = () => {
		setOpenMenu((prev) => !prev);
	};
	return (
		<nav className='flex items-center'>
			<div className='flex items-center'>
				<div className='text-20 font-bold mr-2'>VISA Card</div>
				{isDarkMode ? (
					<BsSunFill
						size={'24px'}
						color='#e9c46a'
						className='cursor-pointer'
						onClick={() => {
							toggleDarkMode(!isDarkMode);
						}}
					/>
				) : (
					<FaMoon
						size={'24px'}
						color='#e9c46a'
						className='cursor-pointer'
						onClick={() => {
							toggleDarkMode(!isDarkMode);
						}}
					/>
				)}
			</div>
			<ul className='md:flex md:gap-10 ml-auto text-16 font-semibold z-10'>
				{openMenu && isMobile ? (
					<MdOutlineClose size={'24px'} className='cursor-pointer' onClick={handleMenu} />
				) : !openMenu && isMobile ? (
					<HiOutlineMenu size={'24px'} className='cursor-pointer' onClick={handleMenu} />
				) : (
					<>
						<li className='btn-hover'>Features</li>
						<li className='btn-hover'>Menu</li>
						<li className='btn-hover'>Our Story</li>
						<li className='btn-hover ml-20'>Contact</li>
					</>
				)}
				{openMenu && (
					<div className='absolute right-8 bg-white p-8 text-center text-black text-13'>
						<li className='cursor-pointer'>Features</li>
						<li className='cursor-pointer'>Menu</li>
						<li className='cursor-pointer'>Our Story</li>
						<li className='cursor-pointer'>Contact</li>
					</div>
				)}
			</ul>
		</nav>
	);
}

export default NavBar;
