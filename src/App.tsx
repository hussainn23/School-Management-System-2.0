import './App.css';
import { HomePageRoute } from '../routes/homepage.route';
import { AdminRoutes } from '../routes/admin.route';
import { LoginRoute } from '../routes/login.route';

function App() {
  return (
    <>
      <HomePageRoute />
      <AdminRoutes />
      <LoginRoute />
    </>
  );
}

export default App;
