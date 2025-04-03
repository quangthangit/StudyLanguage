import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkLogin() {
            try {
                const response = await axios.get("http://localhost:5000/auth/check-login", { withCredentials: true });
                if (response.data.loggedIn) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Lỗi khi kiểm tra đăng nhập:", error);
                setUser(null);
            }
            setLoading(false);
        }
        checkLogin();
    }, []);

    // Hàm logout khi token hết hạn
    const logout = async () => {
        try {
            await axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
