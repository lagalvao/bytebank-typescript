import { render, screen, fireEvent } from '@testing-library/react'
import Form from '.'

describe('Should render an input field', () => {
  const carryOutTransaction = jest.fn()

  it('in the document', () => {
    render(<Form carryOutTransaction={carryOutTransaction} />)

    const fieldText = screen.getByPlaceholderText('Digite um valor')

    expect(fieldText).toBeInTheDocument()
  })

  it('with type number', () => {
    render(<Form carryOutTransaction={carryOutTransaction} />)

    const fieldText = screen.getByPlaceholderText('Digite um valor')

    expect(fieldText).toHaveAttribute('type', 'number')
  })

  it('that can be filled', () => {
    render(<Form carryOutTransaction={carryOutTransaction} />)

    const fieldText = screen.getByPlaceholderText('Digite um valor')

    fireEvent.change(fieldText, {
      target: { value: '50' },
    })
  })
})

describe('Should call an onSubmit event', () => {
  const carryOutTransaction = jest.fn()

  it('when clicking on carry out transaction', () => {
    render(<Form carryOutTransaction={carryOutTransaction} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(carryOutTransaction).toHaveBeenCalledTimes(1)
  })
})
