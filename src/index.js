import _ from 'lodash'
import './style.css'

import { pageLoad } from './home'

function component () {
  const content = document.querySelector('#content')
  content.appendChild(pageLoad())

  return content
}

component()
