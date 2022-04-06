// Context
import { StripeProvider } from "../components/Stripe/stripeContext";
// Components
import Navbar from "../components/Stripe/Navbar";
import Sidebar from "../components/Stripe/Sidebar";
import Hero from "../components/Stripe/Hero";
import Submenu from "../components/Stripe/Submenu";

export default function Stripe() {
  return (
    <StripeProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </StripeProvider>
  );
}
