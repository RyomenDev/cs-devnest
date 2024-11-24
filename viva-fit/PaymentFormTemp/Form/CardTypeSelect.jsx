function CardTypeSelect({
  paymentData,
  setPaymentData,
  cardTypes,
  errors,
  setErrors,
}) {
  return (
    <select
      value={paymentData.cardType || ""}
      onChange={(e) => {
        const selectedCardType = e.target.value;
        setPaymentData({
          ...paymentData,
          cardType: selectedCardType,
          cardNumber: "", // Reset card number on card type change
        });
      }}
      required
      className="w-full p-2 border border-gray-300 rounded mb-4"
    >
      <option value="" disabled>
        Select Card Type
      </option>
      {cardTypes.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default CardTypeSelect;
