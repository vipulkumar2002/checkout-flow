"use client";

import { useRouter } from "next/navigation";
import CartSummary from "../../components/CartSummary";
import PageWrapper from "../PageWrapper";

export default function CartPage() {
    const router = useRouter();

    return (
        <PageWrapper>
            <CartSummary onNext={() => router.push("/checkout/payment")} />
        </PageWrapper>
    );
}
