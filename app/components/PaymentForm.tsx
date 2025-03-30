import { Card, CardContent } from "../components/common/Card";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PaymentForm = ({ onNext, onBack }: any) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [errors, setErrors] = useState({ cardNumber: "", expiry: "", cvv: "" });

    const validateCardNumber = (value: string) => {
        if (value.length < 10) {
            return "Card number must be at least 10 digits";
        }
        return "";
    };

    const validateExpiry = (value: string) => {
        const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
        if (!regex.test(value)) {
            return "Invalid expiry format (MM/YY)";
        }
        return "";
    };

    const validateCvv = (value: string) => {
        if (value.length < 3) {
            return "CVC must be at least 3 digits";
        }
        return "";
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCardNumber(value);
        setErrors({ ...errors, cardNumber: validateCardNumber(value) });
    };

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setExpiry(value);
        setErrors({ ...errors, expiry: validateExpiry(value) });
    };

    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCvv(value);
        setErrors({ ...errors, cvv: validateCvv(value) });
    };

    const isFormValid = !errors.cardNumber && !errors.expiry && !errors.cvv && cardNumber && expiry && cvv;

    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card className="shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                        <CreditCard className="text-green-500" size={28} />
                        <h2 className="text-xl font-bold">Payment</h2>
                    </div>
                    <div className="space-y-3">
                        <Input
                            className="w-full border border-gray-300 p-2 rounded-lg"
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            type="number"
                            required
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                        <div className="flex space-x-2">
                            <div className="w-1/2">
                                <Input
                                    placeholder="MM/YY"
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    required
                                />
                                {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
                            </div>
                            <div className="w-1/2">
                                <Input
                                    placeholder="CVC"
                                    className="w-full border border-gray-300 p-2 rounded-lg"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    type="number"
                                    required
                                />
                                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button variant="outline" onClick={onBack}>Back</Button>
                        <Button
                            className="w-auto bg-green-600 hover:bg-green-700 text-white"
                            onClick={onNext}
                            disabled={!isFormValid}
                        >Confirm Payment</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default PaymentForm;
