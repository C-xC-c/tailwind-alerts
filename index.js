const plugin = require('tailwindcss/plugin');

module.exports = function({ addComponents }) {
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
		}
	}
	addComponents(alerts)
}
