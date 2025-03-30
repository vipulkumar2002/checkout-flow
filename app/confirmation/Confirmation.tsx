import { Card, CardContent } from "../components/common/Card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Confirmation = () => {
    return (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <Card className="shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-6 text-center space-y-4">
                    <CheckCircle className="text-green-500 mx-auto" size={50} />
                    <h2 className="text-2xl font-bold">Payment Successful</h2>
                    <p className="text-gray-500">Thank you for your order! Your transaction is complete.</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default Confirmation
