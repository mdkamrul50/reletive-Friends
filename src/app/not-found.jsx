"use client"

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      {/* Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 text-center max-w-lg w-full">
        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-bold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Link href="/">
            <button className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition"
          >
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-6">
          Error Code: 404 | Not Found
        </p>
      </div>
    </div>
  );
}
