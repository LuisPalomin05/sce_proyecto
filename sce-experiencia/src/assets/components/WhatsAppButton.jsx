import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../../css/WhatsAppButton.css"; 

const WhatsAppButton = () => {
  const phoneNumber = "51919608597"; // tu número con código de país
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={url}np
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
