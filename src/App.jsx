import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLoading from "./components/CustomLoading";
const Dashboard = lazy(() =>
  wait(1000).then(() => import("./pages/Dashboard"))
);
const Login = lazy(() => wait(1000).then(() => import("./pages/Login")));
const Register = lazy(() => wait(1000).then(() => import("./pages/Register")));
const Main = lazy(() => wait(1000).then(() => import("./pages/Main")));
const AdminLogin = lazy(() =>
  wait(1000).then(() => import("./pages/AdminLogin"))
);

const App = () => {
  return (
    <Suspense fallback={<CustomLoading />}>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/signin" element={<Login />} /> */}
          {/* <Route exact path="/signup" element={<Register />} /> */}
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/backstore/*" element={<Dashboard />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export default App;
