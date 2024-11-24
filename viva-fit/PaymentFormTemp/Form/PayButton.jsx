function PayButton({ handleSubmit, loading }) {
  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className={`w-full bg-blue-500 text-white p-2 rounded ${
        loading ? "opacity-50" : "hover:bg-blue-600"
      }`}
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
}

export default PayButton;
