"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CartSummary from "../../cartSummary/CartSummary";
import Payment from "../../payment/PaymentForm";
import Confirmation from "../../confirmation/Confirmation";

const CheckoutFlow = () => {
    const [step, setStep] = useState(1);

    return (
        <motion.div className="max-w-3xl mx-auto p-6 space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {step === 1 && <CartSummary onNext={() => setStep(2)} />}
            {step === 2 && <Payment onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <Confirmation />}
        </motion.div>
    );
}

export default CheckoutFlow
