import { useState } from "react";
import CardTypeSelect from "./CardTypeSelect";
import CardNumberInput from "./CardNumberInput";
import ExpiryDateInput from "./ExpiryDateInput";
import CVCInput from "./CVCInput";
import PayButton from "./PayButton";
import toast from "react-hot-toast";

const cardTypes = [
  "Visa",
  "MasterCard",
  "American Express",
  "Discover",
  "Diners Club",
  "JCB",
  "UnionPay",
  "RuPay",
];

// Define card number length limits and CVC length for each card type
const cardTypeRules = {
  Visa: { cardNumberLength: [16], cvcLength: 3 },
  MasterCard: { cardNumberLength: [16], cvcLength: 3 },
  "American Express": { cardNumberLength: [15], cvcLength: 4 },
  Discover: { cardNumberLength: [16], cvcLength: 3 },
  "Diners Club": { cardNumberLength: [14], cvcLength: 3 },
  JCB: { cardNumberLength: [16], cvcLength: 3 },
  UnionPay: { cardNumberLength: [16, 19], cvcLength: 3 },
  RuPay: { cardNumberLength: [16], cvcLength: 3 },
};

function PaymentForm({ paymentData, setPaymentData, handlePayment, loading }) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    // Your existing validation logic here
    return (
      Object.keys(errors).length === 0 &&
      paymentData.cardType &&
      paymentData.cardNumber &&
      paymentData.cvc &&
      paymentData.expMonth &&
      paymentData.expYear
    );
  };

  const handleSubmit = () => {
    if (loading || !validateForm()) {
      toast.error("Fill all details");
    } else {
      handlePayment(); // Call the actual payment handling function
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4">
      <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
      <CardTypeSelect
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        cardTypes={cardTypes}
        errors={errors}
        setErrors={setErrors}
      />
      <CardNumberInput
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        errors={errors}
        setErrors={setErrors}
        cardTypeRules={cardTypeRules}
      />
      <ExpiryDateInput
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        errors={errors}
        setErrors={setErrors}
      />
      <CVCInput
        paymentData={paymentData}
        setPaymentData={setPaymentData}
        errors={errors}
        setErrors={setErrors}
        cardTypeRules={cardTypeRules}
      />
      <PayButton handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default PaymentForm;
