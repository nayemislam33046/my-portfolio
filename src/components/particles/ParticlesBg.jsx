import Particles from '@tsparticles/react'
import React from 'react'
import particlesConfig from './particlesConfig'
const ParticlesBg = () => {
  return (
    <Particles options={particlesConfig} ></Particles>
  )
}
export default ParticlesBg