
import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className='side-bar'>
        <button>+ New Chat</button>
 <ul className='history'>
  <li>Palomang</li>
 </ul>
 <nav>
 <p>Made by Kariri</p> 
  </nav>
      </section>
      <section className='main'>
        <h1>KariGPT</h1>
        <ul className='feed'>

        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input/>
            <div id="submit">➢</div>
          </div>
          <p className='info'> Chat GPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
