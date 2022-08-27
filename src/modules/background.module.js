import { Module } from '../core/module'
import { getRandomColor } from '../utils/utils'


export class BackgroundModule extends Module
{
constructor (type, text) {
super (type, text)
}

trigger() {
    document.body.style.backgroundColor = getRandomColor()
}
}