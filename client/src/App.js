import React from "react";
import AppRouter from "./AppRouter";
import AuthState from "./contexts/Auth/authState";
function App() {
  return (
    <div className="App">
      <AuthState>
        <AppRouter />
      </AuthState>
    </div>
  );
}

export default App;
