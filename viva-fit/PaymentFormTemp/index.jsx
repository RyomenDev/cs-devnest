import { Toaster } from "react-hot-toast";
import { CartProvider } from "./CartProvider";
import PaymentPages from "./PaymentPage";

function PaymentPage() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <CartProvider>
        <PaymentPages />
      </CartProvider>
    </>
  );
}

export default PaymentPage;