"use client";

import { useRouter } from "next/navigation";
import PaymentForm from "../../components/PaymentForm";
import PageWrapper from "../PageWrapper";

export default function PaymentPage() {
    const router = useRouter();

    return (
        <PageWrapper>
            <PaymentForm
                onNext={() => router.push("/checkout/confirmation")}
                onBack={() => router.push("/checkout/cart")}
            />
        </PageWrapper>
    );
}
