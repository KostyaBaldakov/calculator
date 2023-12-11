import logo from './logo.svg';
import './App.css';

const year = new Date().getFullYear(); // Императивный

function App() { // Императивный
	return ( // Императивный
		// Деклоративный подход начало
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{year}
			</header>
		</div>
		// Деклоративный подход конец
	);
}

export default App;
