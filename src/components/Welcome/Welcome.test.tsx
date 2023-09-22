import { render, screen } from '@test-utils';
import { Welcome } from './index';

describe('Welcome component', () => {
  it('has correct hero title', () => {
    render(<Welcome />);
    expect(screen.getByText('May the power')).toHaveAttribute('href', '/');
  });
});
