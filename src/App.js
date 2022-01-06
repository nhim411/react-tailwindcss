import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
import { useState, useEffect } from 'react';

function App() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleSize);
		handleSize();
		return () => {
			window.removeEventListener('resize', handleSize);
		};
	}, []);
	useEffect(() => {
		if (windowSize.width < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [windowSize]);
	return (
		<div className='overflow-y-auto overflow-x-hidden font-sora h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 dark:text-white from-white text-black md:px-[20px]'>
			<NavBar isMobile={isMobile} />
			<Slogan />
			<Content />
		</div>
	);
}

export default App;
