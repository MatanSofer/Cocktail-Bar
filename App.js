import React from 'react';
import Layout from './layout/Layout';
import './App.css';
import Search from './components/search/Search';

const App = () => {
  return (
  <Layout>
    <div className="name">
        <div className="search-container">
          <Search />
        </div>  
    </div>
  </Layout>
  );

};

export default App;
