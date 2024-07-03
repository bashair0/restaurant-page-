import _ from 'lodash'
import './style.css'

import { pageLoad } from './modules/home'
import { menu } from './modules/menu'
import { aboutPage } from './modules/about'

function content () {
  const homeButton = document.querySelector('#home-btn')
  const menuButton = document.querySelector('#menu-btn')
  const aboutButton = document.querySelector('#about-btn')
  const content = document.querySelector('#content')

  content.appendChild(pageLoad())

  /* const toggleActiveButton = () => {
    const navButtons = document.querySelectorAll('.nav-btn')
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        console.log(button.id)
      })
    })
  } */

  const addHomePage = () => {
    content.innerHTML = ''
    content.appendChild(pageLoad())
    homeButton.classList.add('active-btn')
    menuButton.classList.remove('active-btn')
    aboutButton.classList.remove('active-btn')
  }

  const addMenuPage = () => {
    content.innerHTML = ''
    content.appendChild(menu())

    menuButton.classList.add('active-btn')
    homeButton.classList.remove('active-btn')
    aboutButton.classList.remove('active-btn')
  }

  const addAboutPage = () => {
    content.innerHTML = ''
    content.appendChild(aboutPage())

    aboutButton.classList.add('active-btn')
    homeButton.classList.remove('active-btn')
    menuButton.classList.remove('active-btn')
  }

  homeButton.addEventListener('click', () => {
    addHomePage()
  })

  menuButton.addEventListener('click', () => {
    addMenuPage()
  })

  aboutButton.addEventListener('click', addAboutPage)

  return content
}

content()
