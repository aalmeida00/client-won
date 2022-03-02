import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 3rem;
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Logo = styled.img`
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  width: min(30rem, 100%);
`
