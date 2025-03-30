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

    const isFormValid = cardNumber && expiry && cvv;

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
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <div className="flex space-x-2">
                            <Input
                                placeholder="MM/YY"
                                className="w-1/2 border border-gray-300 p-2 rounded-lg"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                            />
                            <Input
                                placeholder="CVC"
                                className="w-1/2 border border-gray-300 p-2 rounded-lg"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button variant="outline" onClick={onBack}>Back</Button>
                        <Button
                            className="w-1/4 bg-green-600 hover:bg-green-700 text-white"
                            onClick={onNext}
                            disabled={!isFormValid}
                        >Confirm Payment</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default PaymentForm
