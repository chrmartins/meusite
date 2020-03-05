import React from 'react'
import { Img } from './styles'
import avatar from '../../img/meuavatar.webp'
import SocialLinks from '../SocialLinks'

export default function Avatar() {
  return (
    <Img>
      <img src={avatar} alt='Avatar'/>
      <SocialLinks />
    </Img>
  )
}
