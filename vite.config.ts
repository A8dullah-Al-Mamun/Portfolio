import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// SINGLE CONFIG POINT: set your GitHub repository name here.
// For a username site (username.github.io) set USER_SITE = true.
const REPO_NAME = 'portfolio'
const USER_SITE = false
export default defineConfig({ base: USER_SITE ? '/' : `/${REPO_NAME}/`, plugins: [react()] })
