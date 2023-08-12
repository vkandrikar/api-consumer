import './App.css';
import Header from './components/Header';
import Library from './components/Library';
import withLibrary from './containers/withLibrary';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  const EnhancedLibrary = withLibrary(Library);

  return (
    <div className="App">
      <ErrorBoundary
        fallback={<div>Something went wrong. Please refresh page.</div>}
      >
        <Header />
        <EnhancedLibrary />
      </ErrorBoundary>
    </div>
  );
}

export default App;
