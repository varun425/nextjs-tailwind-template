import Link from "next/link";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data); // Replace with actual login API call
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover" style={{ backgroundImage: "url('ve.png')", objectFit:"cover" }}>
      {/* <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm w-full"> */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-s sm:max-w-sm md:max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-400"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-400"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="text-right mb-4">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 text-gray-400">Or</span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="facebook">
            <i className="fa-brands fa-facebook mr-2"></i>
            <span className="text-[14px]">Login with Facebook</span>
          </Button>
          <Button variant="google">
            <i className="fa-brands fa-google mr-2"></i>
            <span className="text-[14px]">Login with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
