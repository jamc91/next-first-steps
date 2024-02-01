import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Pagina de contacto.",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-6xl">Contact Page</h1>
    </div>
  );
}
