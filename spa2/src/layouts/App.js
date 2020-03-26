import React from 'react';
import '../styles/app.css'
import Header from './Header'
import Nav from './Nav'
import Page from './Page'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>

            {<Header />}
          </header>
          <main>
            <aside>
              {<Nav />}
            </aside>
            <section className="page">
              {<Page />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
