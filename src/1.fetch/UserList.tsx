import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fetch.css";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="container">
            <h1>ユーザー一覧</h1>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <strong>{user.name}</strong> ({user.username})<br />
                        {user.email}
                        <br />
                        <button onClick={() => navigate(`/fetch/${user.id}`)}>
                            詳細を見る
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Network response was not ok");
    const data: User[] = await res.json();
    return data;
};

// 勉強メモ
// React.FCはFunctional Componentの略で、関数型コンポーネントを定義するための型エイリアスです。
