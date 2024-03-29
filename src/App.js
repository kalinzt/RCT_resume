import logo from './logo.svg';
import './App.css';
function GNB() {
  return (
    <div className="GNB">
      <header>
        <h1><a href="/">WEB</a></h1>
        <nav>
          <ol>
            <li><a href="/read/1">자기소개</a></li>
            <li><a href="/read/2">경력사항</a></li>
            <li><a href="/read/3">포트폴리오</a></li>
          </ol>
        </nav>
      </header>
    </div>

  )
}

function App() {
  return (
    <div className="App">
      Dave's RESUME
      <GNB></GNB>
      <header>

      </header>

      <article>
        <h2>QA Engineer</h2>
      </article>
    </div >
  );
}

export default App;
