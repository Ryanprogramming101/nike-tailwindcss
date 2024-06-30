import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
});

// Youtube Course
// Tailwind CSS Full Course 2023 | Build and Deploy a Nike Website
// https://youtu.be/tS7upsfuxmo?list=PL1ZscGk5yT1ay36UBtoPoh468jdo_L73K
