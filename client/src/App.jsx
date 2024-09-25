import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./components/Data";
import Leaders from "./components/Leaders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
