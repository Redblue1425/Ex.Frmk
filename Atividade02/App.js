function App() {
    return (
      <div className="App">
          <header className="App-header">
            <div>
              <form action="" method="get" class="form-example">
                <div class="form-example">
                  <label for="user">Usuário: </label>
                    <input type="text" name="user" id="user" required />
                  </div>
                <div class="form-example">
              <label for="password">Senha: </label>
            <input type="password" name="password" id="password" required />
          </div>
        <div class="form-example">
      <input type="submit" value="Subscribe!" />
    </div>
  </form>
    </div>        
        </header>
          </div>
    );
  }
  
  export default App;
  