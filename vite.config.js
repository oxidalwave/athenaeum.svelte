import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	resolve:{
	  alias:{
		'$components' : path.resolve(__dirname, './src/components'),
		'$prisma' : path.resolve(__dirname, './prisma'),
	  },
	},
	plugins: [sveltekit()]
};

export default config;
