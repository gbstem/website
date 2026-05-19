import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClassPage from '@/components/ClassPage';

// Mock matchMedia for rc-slider if needed or for bootstrap
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('Global Components', () => {
  it('renders Navigation', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  });

  it('renders Footer', () => {
    render(<Footer />);
    expect(screen.getByText(/gbSTEM/i)).toBeInTheDocument();
  });

  it('renders ClassPage generic component', () => {
    render(
      <ClassPage 
        title="Test Class" 
        classTitle="TC101" 
        color="#fff" 
        online={true} 
        gradeRange="1-3" 
        description="A cool class" 
        prerequisites="None" 
        modules={["Intro"]} 
        trackPage="/cs" 
      />
    );
    expect(screen.getByRole('heading', { name: /Test Class/i })).toBeInTheDocument();
    expect(screen.getByText(/A cool class/i)).toBeInTheDocument();
  });
});
