import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Testing from 'vite-plugin-testing';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Testing({ framework: 'jest' })],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
})
