

import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCartContext, useCartActionsContext } from "./CartProvider";
import PaymentForm from "./Form/PaymentForm";
import { createPayment } from "../../../../api/PaymentApi";

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, isLoading, error } = useCartContext(); // Access cart state
  const { fetchCart } = useCartActionsContext(); // Access actions
  const [amount, setAmount] = useState(0);
  const [paymentData, setPaymentData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const calculateAmount = () => {
      const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
      setAmount(totalAmount);
    };
    calculateAmount();
  }, [cart]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Tokenize card data
      const cardElement = elements.getElement(CardElement);
      const { error: tokenError, token } = await stripe.createToken(
        cardElement
      );
      if (tokenError) {
        throw new Error(tokenError.message);
      }
      // Prepare payment info with amount and token
      const paymentInfo = { amount, token: token.id }; // Use token.id instead of card data
      const result = await createPayment(paymentInfo);
      console.log("Payment successful:", result);
    } catch (error) {
      console.error("Payment failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment</h2>

      {/* Confirmation Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <ul className="grid grid-cols-1 gap-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 border-b"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>
                  {item.name} (x{item.qty})
                </span>
              </div>
              <span className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold mt-2">
          <span>Total Amount:</span>
          <span>${amount.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Form */}
      <PaymentForm
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        handlePayment={handlePayment}
        loading={loading}
      />
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </div>
  );
}

export default PaymentPage;
