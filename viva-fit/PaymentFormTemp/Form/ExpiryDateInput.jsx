function ExpiryDateInput({ paymentData, setPaymentData, errors, setErrors }) {
  const validateExpMonth = (month) => month >= 1 && month <= 12;
  const validateExpYear = (year) => year >= new Date().getFullYear();

  const handleExpMonthChange = (e) => {
    const expMonth = e.target.value.slice(0, 2); // Limit expiry month to 2 digits
    setPaymentData({ ...paymentData, expMonth });

    const newErrors = { ...errors };
    if (!validateExpMonth(expMonth)) {
      newErrors.expMonth = "Invalid expiry month (1-12).";
    } else {
      delete newErrors.expMonth;
    }
    setErrors(newErrors);
  };

  const handleExpYearChange = (e) => {
    const expYear = e.target.value.slice(0, 4); // Limit expiry year to 4 digits
    setPaymentData({ ...paymentData, expYear });

    const newErrors = { ...errors };
    if (!validateExpYear(expYear)) {
      newErrors.expYear = "Expiry year must be this year or later.";
    } else {
      delete newErrors.expYear;
    }
    setErrors(newErrors);
  };

  return (
    <div className="flex space-x-4 mb-1">
      <input
        type="number"
        placeholder="Expiry Month"
        value={paymentData.expMonth || ""}
        onChange={handleExpMonthChange}
        required
        className="w-1/2 p-2 border border-gray-300 rounded"
      />
      {errors.expMonth && (
        <p className="text-red-500 text-sm">{errors.expMonth}</p>
      )}

      <input
        type="number"
        placeholder="Expiry Year"
        value={paymentData.expYear || ""}
        onChange={handleExpYearChange}
        required
        className="w-1/2 p-2 border border-gray-300 rounded"
      />
      {errors.expYear && (
        <p className="text-red-500 text-sm">{errors.expYear}</p>
      )}
    </div>
  );
}

export default ExpiryDateInput;
