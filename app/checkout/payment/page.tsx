"use client";

import { useRouter } from "next/navigation";
import PaymentForm from "../../components/PaymentForm";

export default function PaymentPage() {
    const router = useRouter();

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <PaymentForm
                onNext={() => router.push("/checkout/confirmation")}
                onBack={() => router.push("/checkout/cart")}
            />
        </div>
    );
}
