import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [react()],
})


// run build when ready to deploy. This is done in client
// Should have dist folder ready. Take dist folder and copy whole folder into server folder.

// app.use(express.static(path.join(__dirname, 'public'))); change to app.use(express.static('dist'))