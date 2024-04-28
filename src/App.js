import { AuthProvider } from "./contexts/AuthProvider.jsx";
import Routes from "./routes/Routes.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
