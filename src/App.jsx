import './App.css';
import ResizableContainer from './views/ResizableContainer';
import './index.css';

function App() {
  return (
    <div
      style={{
        color: 'rgba(255, 255, 255, 0.87)',
        background: '#242424',
      }}
    >
      <ResizableContainer />
    </div>
  );
}

export default App;
