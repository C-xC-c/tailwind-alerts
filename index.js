const plugin = require('tailwindcss/plugin');

module.exports = function({ addComponents, theme, e }) {
	const alerts = {
		'.alert': {
			padding: '.75rem 1.25rem',
			marginBottom: '1rem',
			border: '1px solid transparent',
			borderRadius: '.25rem',
		},
		'.alert-primary': {
			color: '#004085',
			backgroundColor: '#cce5ff',
			borderColor: '#b8daff',
		},
		'.alert-secondary': {
			color: '#383d41',
			backgroundColor: '#e2e3e5',
			borderColor: '#d6d8db',
		},
		'.alert-success': {
			color: '#155724',
			backgroundColor: '#d4edda',
			borderColor: '#c3e6cb',
		},
		'.alert-danger': {
			color: '#721c24',
			backgroundColor: '#f8d7da',
			borderColor: '#f5c6cb',
		},
		'.alert-warning': {
			color: '#856404',
			backgroundColor: '#fff3cd',
			borderColor: '#ffeeba',
		},
		'.alert-info': {
			color: '#0c5460',
			backgroundColor: '#d1ecf1',
			borderColor: '#bee5eb',
		},
		'.alert-light': {
			color: '#818182',
			backgroundColor: '#fefefe',
			borderColor: '#fdfdfe',
		},
		'.alert-dark': {
			color: '#1b1e21',
			backgroundColor: '#d6d8d9',
			borderColor: '#c6c8ca',
		},
		'.alert-link': { fontWeight: '700' },
		'.alert-primary .alert-link': { color: '#002752' },
		'.alert-secondary .alert-link': { color: '#202326' },
		'.alert-success .alert-link': { color: '#0b2e13' },
		'.alert-info .alert-link': { color: '#062c33' },
		'.alert-danger .alert-link': { color: '#491217' },
		'.alert-warning .alert-link': { color: '#533f03' },
		'.alert-light .alert-link': { color: '#686868' },
		'.alert-dark .alert-link': { color: '#040505' }
	};

	let arr = [];
	
	Object.entries(theme('alerts', {})).forEach(([key, value]) => {
		arr.push({
			[`.alert-${e(key)}`]: {
				color: value[0],
				backgroundColor: value[1],
				borderColor: value[2]
			},
		});
		value.length >= 4 && arr.push({
			[`.alert-${e(key)} .alert-link`]: {
				color: value[3]
			}
		});
	});
	
	addComponents(alerts);
	addComponents(arr);
};

