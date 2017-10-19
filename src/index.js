import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCufEtZm1H16JIgHv64wstm2oKRjsbXRJ0';

// Create a new component. this component should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
