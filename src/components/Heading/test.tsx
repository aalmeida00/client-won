import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    const { container } = renderWithTheme(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    const { container } = renderWithTheme(
      <Heading color="black">Won Games</Heading>
    )

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with the line on the left side', () => {
    const { container } = renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line on the bottom', () => {
    const { container } = renderWithTheme(
      <Heading lineBottom>Won Games</Heading>
    )

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
