import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Data:", data);
    // Replace this with an API call to send the password reset link
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover" style={{ backgroundImage: "url('ve.png')"}}>

      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-400"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <Button type="submit" variant="primary">
            Send Reset Link
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Remember your password?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
