import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('Menu', () => {
  it('should render a link to the home page', () => {
    render(<Menu />)

    const linkHomePage = screen.getByText('Inicial')

    expect(linkHomePage).toBeInTheDocument()
  })

  it('should render a list of links', () => {
    render(<Menu />)

    const listLinks = screen.getAllByRole('link')

    expect(listLinks).toHaveLength(4)
  })

  it('should not render an extract link', () => {
    render(<Menu />)

    const extractLink = screen.queryByText('Extrato')

    expect(extractLink).not.toBeInTheDocument()
  })

  it('should render a list of links with class link', () => {
    render(<Menu />)

    const links = screen.getAllByRole('link')

    links.forEach((link) => expect(link).toHaveClass('text-slate-900'))

    expect(links).toMatchSnapshot()
  })
})
