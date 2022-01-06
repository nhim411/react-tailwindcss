import { useState, useEffect } from 'react';

function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === 'dark');
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};
	useEffect(() => {
		const html = window.document.documentElement;
		const prev = isDarkMode ? 'dark' : 'light';
		html.classList.remove(prev);
		const next = isDarkMode ? 'light' : 'dark';
		html.classList.add('theme', next);
		localStorage.setItem('theme', next);
	}, [isDarkMode]);
	return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
