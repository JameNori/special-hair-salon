import { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, usernameError, passwordError, serverError, isLoading } =
    useLogin();
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 md:h-screen">
        <img
          src="/login-image-landscape.png"
          alt="Special Hair Salon"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="relative w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center px-6 py-10"
        style={{
          backgroundImage: "url('/login-background-landscape.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: "url('/login-image-portrait.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <form onSubmit={handleSubmit}>
          <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
            <div className="flex justify-center">
              <img
                src="/logo.svg"
                alt="Special Hair Salon"
                className="h-16 w-fit"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative pb-5">
                <label className="text-sm font-medium text-salon-primary">
                  ชื่อผู้ใช้
                </label>
                <div className="flex items-center border border-salon-secondary/40 rounded-xl px-3 gap-2 bg-white mt-1">
                  <User size={16} className="text-salon-secondary" />
                  <input
                    type="text"
                    placeholder="กรอกชื่อผู้ใช้ของคุณ"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full py-3 text-sm bg-transparent outline-none text-salon-primary placeholder:text-salon-secondary/50"
                  />
                </div>
                <p className="absolute bottom-0 left-0 text-xs text-red-500">
                  {usernameError}
                </p>
              </div>

              <div className="relative pb-5">
                <label className="text-sm font-medium text-salon-primary">
                  รหัสผ่าน
                </label>
                <div className="flex items-center border border-salon-secondary/40 rounded-xl px-3 gap-2 bg-white mt-1">
                  <Lock size={16} className="text-salon-secondary" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="กรอกรหัสผ่านของคุณ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 text-sm bg-transparent outline-none text-salon-primary placeholder:text-salon-secondary/50"
                  />
                  <button
                    onClick={togglePassword}
                    type="button"
                    className="text-salon-secondary hover:text-salon-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="absolute bottom-0 left-0 text-xs text-red-500">
                  {passwordError}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-salon-primary cursor-pointer">
                  <input type="checkbox" className="accent-salon-accent" />
                  จดจำฉันไว้
                </label>
                <button
                  type="button"
                  onClick={() => alert("กรุณาติดต่อผู้ดูแลระบบ")}
                  className="text-sm text-salon-accent hover:underline"
                >
                  ลืมรหัสผ่าน?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-salon-footer text-salon-footer-text font-medium hover:bg-salon-footer/90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
              </button>
              {serverError && (
                <p className="text-xs text-red-500 text-center">
                  {serverError}
                </p>
              )}

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-salon-secondary/20" />
                <span className="text-sm text-salon-secondary">หรือ</span>
                <div className="flex-1 h-px bg-salon-secondary/20" />
              </div>

              <Link
                to="/"
                className="w-full py-3 rounded-xl border border-salon-accent text-salon-accent text-sm font-medium text-center hover:bg-salon-accent hover:text-salon-accent-foreground transition-colors"
              >
                กลับหน้าหลัก
              </Link>
            </div>
          </div>
        </form>

        <p className="relative z-10 text-xs text-salon-secondary mt-8">
          © 2026 Special Hair Salon. Designed with care.
        </p>
      </div>
    </div>
  );
}
