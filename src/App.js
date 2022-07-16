import './App.css';
import Button from './components/button/Button';
function App() {
  let contatos = [{ nome: "daniel", cidade: "juazeiro" }, { nome: "dayvid", cidade: "ipaba" }]

  return (
    <div className="App">
      <header className="App-header">
      {contatos.map((contato,index)=>{return <div key={index}>{contato.nome}-{contato.cidade}</div>})}
        <Button tipo="save"> algo aqui
        </Button>
  
      </header>
    </div>
  );
}

export default App;
