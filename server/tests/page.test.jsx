import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders hello world', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 });
 
    expect(heading).toBeInTheDocument();
  })
})