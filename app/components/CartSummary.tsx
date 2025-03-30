import React from 'react'
import { Card, CardContent } from "../components/common/Card";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Button from '../components/common/Button';

const CartSummary = ({ onNext }: any) => {
    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card>
                <CardContent className="p-4 space-y-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <ShoppingCart /> Cart Summary
                    </h2>
                    <p>Item 1 - $50</p>
                    <p>Item 2 - $30</p>
                    <p className="font-semibold">Total: $80</p>
                    <Button onClick={onNext} className="w-full">Proceed to Payment</Button>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default CartSummary
