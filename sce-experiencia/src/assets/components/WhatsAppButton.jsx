import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "../../css/WhatsAppButton.css"; 

const WhatsAppButton = () => {
  const phoneNumber = "51997492484"; // tu número con código de país
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </Link>
  );
};

export default WhatsAppButton;
