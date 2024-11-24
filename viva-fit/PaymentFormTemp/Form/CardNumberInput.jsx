import { useState } from "react";

function CardNumberInput({
  paymentData,
  setPaymentData,
  errors,
  setErrors,
  cardTypeRules,
}) {
  const validateCardNumber = (number, cardType) => {
    const lengthLimits = cardTypeRules[cardType]?.cardNumberLength;
    return lengthLimits ? lengthLimits.includes(number.length) : false;
  };

  const handleCardNumberChange = (e) => {
    const maxLength =
      cardTypeRules[paymentData.cardType]?.cardNumberLength.slice(-1)[0] || 19; // Default max length to 19
    const cardNumber = e.target.value.slice(0, maxLength); // Limit input to maxLength
    setPaymentData({ ...paymentData, cardNumber });

    // Real-time validation
    const newErrors = { ...errors };
    if (
      paymentData.cardType &&
      !validateCardNumber(cardNumber, paymentData.cardType)
    ) {
      newErrors.cardNumber = `Card number must be ${cardTypeRules[
        paymentData.cardType
      ].cardNumberLength.join(" or ")} digits.`;
    } else {
      delete newErrors.cardNumber; // Clear error if valid
    }
    setErrors(newErrors);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Card Number"
        value={paymentData.cardNumber || ""}
        onChange={handleCardNumberChange}
        disabled={!paymentData.cardType} // Disable input if no card type is selected
        className={`w-full p-2 border border-gray-300 rounded mb-1 ${
          !paymentData.cardType ? "bg-gray-200" : ""
        }`}
      />
      {errors.cardNumber && (
        <p className="text-red-500 text-sm">{errors.cardNumber}</p>
      )}
    </div>
  );
}

export default CardNumberInput;
