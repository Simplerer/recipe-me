import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })

// This is the expanded config off the basic original ^^^^ above
// Here I am establishing my proxy which allows fetch calls between my server and my client

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [react()],
})


// /api will connect any request sent starting with /api to the fornt end by tricking the browser into thinking it is coming from the server

// run build when ready to deploy. Should have dist folder ready. Take dist folder and copy whole folder into server folder.

app.use(express.static('dist')); 
// change to app.use(express.static('dist'))

// when the frontend is ready I can run only local host and get the application running wiht just the dist. If any changes need to be made however I will need to delete dist folder, make changes, and then rebuild 

// deploying from railway, you can use your github repo with dist folder to deploy