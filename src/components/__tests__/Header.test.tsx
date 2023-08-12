import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe('Header.tsx', () => {
  it('should render', () => {
    render(<Header />);
    expect(screen.getByText('Welcome to Book Library')).toBeInTheDocument();
  });
});