import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMessage } from 'react-icons/ai'

import ecommerce from './assets/ecommerce.png'
import jobsAPI from './assets/jobs-api.png'
import quizzical from './assets/quizzical.png'
import tenzies from './assets/tenzies.png'

export const navItems = [
  {
    id: "header",
    title: 'Home',
    icon: AiOutlineHome
  },
  {
    id: "about",
    title: 'About',
    icon: AiOutlineUser
  },
  {
    id: "portfolio",
    title: 'Portfolio',
    icon: AiOutlineProject
  },
  {
    id: "contact",
    title: 'Contact',
    icon: AiOutlineMessage
  }
]

export const portfolioItems  = [
  {
    id: 1,
    image: ecommerce,
    title: 'Ecommerce',
    github: 'https://github.com/alishereleven/ecommerce',
    website: 'http://alishereleven.github.io/ecommerce'
  },
  {
    id: 2,
    image: jobsAPI,
    title: 'Jobs API',
    github: 'https://github.com/alishereleven',
    website: 'https://jobs-api-eleven.herokuapp.com/'
  },
  {
    id: 3,
    image: quizzical,
    title: 'Quizzical',
    github: 'https://github.com/alishereleven/quizzical',
    website: 'http://alishereleven.github.io/quizzical'
  },
  {
    id: 4,
    image: tenzies,
    title: 'Tenzies',
    github: 'https://github.com/alishereleven/tenzies',
    website: 'http://alishereleven.github.io/tenzies'
  }
]