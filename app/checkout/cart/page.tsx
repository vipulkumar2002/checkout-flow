"use client";

import { useRouter } from "next/navigation";
import CartSummary from "../../components/CartSummary";

export default function CartPage() {
    const router = useRouter();

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <CartSummary onNext={() => router.push("/checkout/payment")} />
        </div>
    );
}
