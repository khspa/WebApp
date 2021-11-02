import Particles from 'react-particles-js'
import particlesConfig from 'particlesJS/particle-config'
import './FrontPage.scss'

export default function ParticleBackground() {
    return (
        <div className="particle-bg">
            <Particles params={particlesConfig}/>
        </div>
        
    )
}