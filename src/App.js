import './App.css';

function App() {
  return (
    <div className="App">
      <main className="jdx-first">
        <header className="top">
          <nav className="nav-bar">

            <a href="#" className="logo">Logo</a>
            
            <div className="mobile-menu">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

            <ul className="list">
              <li><a href="#">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Login</a></li>
            </ul>

          </nav>
        </header>

        <div className="box">
          <h2>Front-end feito em <a href="https://pt-br.reactjs.org/">React.js!</a></h2>
          <button id="btn">Ir ao Desenvolvedor</button>
        </div>
        <div className="bxt">
          <h2><a href="#about"><i className="fas fa-angle-down"></i></a></h2>
        </div>
      </main>
      <section className="jdx-pageDown">
          <div className="about" id="about">
            <div>
              <h2>Lorem Ipsum</h2>
              <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
      </section>
      <section className="contact" id="contact">
        <form method="post">
          <input type="email" placeholder="Insira seu E-mail"></input>
          <input type="submit" placeholder="Enviar"></input>
        </form>
      </section>
      <footer>
        <h4><a href="https://github.com/Luan16p">github.com/Luan16p</a>   ©   Copyright</h4>
      </footer>
    </div>
  );
}
export default App;
