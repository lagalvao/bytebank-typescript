import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  it('should render the logged in user name', () => {
    render(<Header />)

    const username = screen.getByText('Joana Fonseca Gomes')

    expect(username).toBeInTheDocument()
  })
})
