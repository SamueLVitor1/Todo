import { Container } from './styles'
import rocketLogo from '../../assents/rocket.svg'

export function Header() {
  return (
    <Container>
      <img src={rocketLogo} alt="Logo foguete todo" />
      <p>
        to
        <span>do</span>
      </p>
    </Container>
  )
}