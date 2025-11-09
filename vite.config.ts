import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    // Base path for GitHub Pages. Using the repository name ensures built asset
    // URLs point to the correct subpath (https://<user>.github.io/Writer/)
    base: '/Writer/',
    plugins: [react()],
})
