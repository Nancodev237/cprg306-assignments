"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);

  // Handle GitHub sign in
  async function handleSignIn() {
    setError(null);
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      console.error(err);
    }
  }

  // Handle sign out
  async function handleSignOut() {
    setError(null);
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out. Please try again.");
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">
          Shopping List App
        </h1>

        {/* Show error message if something went wrong */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* NOT logged in — show sign in button */}
        {!user ? (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Sign in to access your shopping list.
            </p>
            <button
              onClick={handleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            >
              {/* GitHub icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        ) : (
          /* Logged in — show welcome message, link, and logout */
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Welcome, <span className="font-semibold">{user.displayName}</span>
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </span>
            </p>

            {/* Link to the week-10 shopping list page */}
            <Link
              href="/week-10/shopping-list"
              className="w-full text-center py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Go to Shopping List →
            </Link>

            {/* Sign out button */}
            <button
              onClick={handleSignOut}
              className="w-full py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
