import { render, screen } from '@testing-library/react'
import Balance from '.'

describe('Balance', () => {
  it('should render balance with monetary value', () => {
    render(<Balance balance="100" />)

    const balance = screen.getByTestId('balance')

    expect(balance).toHaveTextContent('R$ 100')
  })
})
