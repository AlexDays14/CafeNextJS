import {useState, useEffect} from "react"
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
  import { useRouter } from "next/router"

const CheckoutForm = ({comprobarPedido, completarOrden}) => {

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    useEffect(() => {
        if (!stripe) {
          return;
        }
    
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );
    
        if (!clientSecret) {
          return;
        }
    
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Your payment was not successful, please try again.");
              break;
            default:
              setMessage("Something went wrong.");
              break;
          }
        });
      }, [stripe]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        setIsLoading(true);
    
        const respuesta = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
          },
          redirect: 'if_required'
        });
        console.log()
        if(respuesta?.paymentIntent?.status === 'succeeded'){
            await completarOrden()
        }else{
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Otherwise, your customer will be redirected to
            // your `return_url`. For some payment methods like iDEAL, your customer will
            // be redirected to an intermediate site first to authorize the payment, then
            // redirected to the `return_url`.
            if (respuesta?.error?.type === "card_error" || respuesta?.error?.type === "validation_error") {
              setMessage(respuesta?.error?.message);
            } else {
              setMessage("An unexpected error occurred.");
            }
        }
    
    
        setIsLoading(false);
      };
    
    

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="md:w-1/2 mt-5 border p-5 rounded-lg shadow-md">
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements || comprobarPedido()} id="submit" className={`mt-5 transition-colors w-full lg:w-auto px-8 py-2 rounded uppercase font-bold text-white ${comprobarPedido() ? "bg-fuchsia-100" : "bg-fuchsia-500 hover:bg-fuchsia-700 cursor-pointer"}`}>
          <span id="button-text">
            {isLoading ? 'Cargando...' : "Pagar"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    )
}

export default CheckoutForm