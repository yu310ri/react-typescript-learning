import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { UserList } from "./1.fetch/UserList.tsx";
import { FormBasic } from "./2.form/FormBasic.tsx";
import { MultiInputForm } from "./2.form/MultiInputForm.tsx";

function App() {
    return (
        <>
            <nav>
                <Link to="/">ホーム画面です。</Link>
                <br />
                <Link to="/fetch">fetch練習</Link>
                <br />
                <Link to="/form/single">単一form練習</Link>
                <br />
                <Link to="/form/multi">複数form練習</Link>
                <br />
            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/fetch" element={<UserList />} />
                <Route path="/form/single" element={<FormBasic />} />
                <Route path="/form/multi" element={<MultiInputForm />} />
            </Routes>
        </>
    );
}

export default App;

//メモ react-router-domの使い方
// useNavigateとuseParamsの使い方を覚えること！
