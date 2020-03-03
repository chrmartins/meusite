import React from 'react'
import { Img } from './styles'
import avatar from '../../img/meuavatar.png'

export default function Avatar() {
  return (
    <Img>
      <img src={avatar}/>
    </Img>
  )
}
