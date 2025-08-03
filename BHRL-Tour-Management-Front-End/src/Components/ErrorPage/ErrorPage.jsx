import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="text-red-500 w-10 h-10" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or an unexpected error has occurred.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
