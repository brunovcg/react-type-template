import { useWindowDimensions } from '@/hooks/window-dimensions'
import LOGO from '@/assets/react.ico'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`

const Img = styled.img`
  animation: ${rotate} infinite 5s linear;
`

export function Welcome() {
  const { width, height } = useWindowDimensions()
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Welcome to React TypeScript Webpack Template</h1>
      <h3>by brunovcg@gmail.com</h3>
      <p style={{ margin: '15px' }}>You are on {process.env.name} env </p>
      <p style={{ margin: '15px' }}>
        Window is now {height}px x {width}px
      </p>
      <Img src={LOGO} alt="react-logo" />
    </div>
  )
}
