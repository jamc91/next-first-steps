import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Ve todos los precios",
};

export default function PricingPage() {
  return (
    <div>
      <h1 className="text-6xl">Pricing Page</h1>
    </div>
  );
}
