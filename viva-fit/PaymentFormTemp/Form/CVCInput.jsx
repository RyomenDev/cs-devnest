function CVCInput({
  paymentData,
  setPaymentData,
  errors,
  setErrors,
  cardTypeRules,
}) {
  const validateCVC = (cvc, cardType) => {
    const cvcLength = cardTypeRules[cardType]?.cvcLength || 3;
    return cvc.length === cvcLength;
  };

  const handleCVCChange = (e) => {
    const maxLength = cardTypeRules[paymentData.cardType]?.cvcLength || 3; // Default max length to 3 for CVC
    const cvc = e.target.value.slice(0, maxLength); // Limit input to maxLength
    setPaymentData({ ...paymentData, cvc });

    const newErrors = { ...errors };
    if (!validateCVC(cvc, paymentData.cardType)) {
      newErrors.cvc = `CVC must be ${maxLength} digits.`;
    } else {
      delete newErrors.cvc;
    }
    setErrors(newErrors);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="CVC"
        value={paymentData.cvc || ""}
        onChange={handleCVCChange}
        required
        className="w-full p-2 border border-gray-300 rounded mb-1"
      />
      {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
    </div>
  );
}

export default CVCInput;
