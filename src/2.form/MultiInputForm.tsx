import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    age: number;
}

export const MultiInputForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        age: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? parseInt(value) || 0 : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitted data: ${JSON.stringify(formData)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

// メモ: 複数のinputを一つのstateで管理する方法
// 入力する項目は基本的にひとつのstateにまとめる。
