import './style.scss';
import {langs} from './newScripts/langs'

window.addEventListener('load',()=>{
  // preloader.classList.add('go')
  scrolling()
  langs()
})
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';

jumps()

