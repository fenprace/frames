import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './Root.tsx'
import './index.css'
import { register } from './libraries/module/index.ts'
import { global } from './store/global.ts'

register('global', global)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
