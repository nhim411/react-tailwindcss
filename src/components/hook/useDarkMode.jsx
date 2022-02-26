import { useState, useEffect } from 'react';

function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === 'dark');
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		const html = window.document.documentElement;
		const prev = isDarkMode ? 'dark' : 'light';
		html.classList.remove(prev);
		const next = isDarkMode ? 'light' : 'dark';
		html.classList.add(next);
		localStorage.setItem('theme', next);
	};

	useEffect(() => {
		const html = window.document.documentElement;
		const currentTheme = isDarkMode ? 'dark' : 'light';
		html.classList.add(currentTheme);
	}, []);

	return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
