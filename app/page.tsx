"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Welcome to Checkout</h1>
      <h3 className="font-bold">🛒 Category: E-commerce and Business Applications</h3>
      <span>Prompt: Create a checkout flow with cart summary, payment, and confirmation.
      </span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
        onClick={() => router.push("/checkout/cart")}
      >
        Go to Checkout
      </button>
    </div>
  );
}
