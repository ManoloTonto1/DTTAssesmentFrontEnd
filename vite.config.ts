import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	
	server: {
		proxy: {
			'/api': {
				target: 'https://api.intern.d-tt.nl/api/houses',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},
		},
		port: 8080,
	}
});
