import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { UserList } from "./1.fetch/UserList.tsx";

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/fetch">fetch練習</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/fetch" element={<UserList />} />
            </Routes>
        </>
    );
}

export default App;

//メモ react-router-domの使い方
// useNavigateとuseParamsの使い方を覚えること！
