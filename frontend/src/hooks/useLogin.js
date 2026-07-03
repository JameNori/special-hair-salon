import { useState } from "react";
import { loginAdmin } from "../services/authService";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const errorMessages = {
    "Invalid username or password": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
    "Internal server error": "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
  };

  const login = async ({ username, password }) => {
    setUsernameError("");
    setPasswordError("");
    setServerError("");

    let isValid = true;
    if (username === "") {
      setUsernameError("กรุณากรอกชื่อผู้ใช้");
      isValid = false;
    }
    if (password === "") {
      setPasswordError("กรุณากรอกรหัสผ่าน");
      isValid = false;
    }
    if (!isValid) return;

    try {
      setIsLoading(true);
      const data = await loginAdmin({ username, password });
      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      setServerError(
        errorMessages[error.message] ||
          "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { login, usernameError, passwordError, serverError, isLoading };
}
