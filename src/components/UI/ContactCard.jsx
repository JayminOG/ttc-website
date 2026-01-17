// src/components/ContactCard.jsx
import React from "react";

const ContactCard = ({ title, emails, phones, address }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-sm p-6 w-full hover:shadow-md transition duration-300 border">
      {/* Title */}
      <h2 className="text-lg font-semibold text-blacks mb-4">{title}</h2>

      {/* Emails */}
      {emails && emails.length > 0 && (
        <p className="text-grays text-md mb-4 flex flex-wrap gap-2">
          {emails.map((email, index) => (
            <span key={index}>
              {email}
              {index < emails.length - 1 && " | "}
            </span>
          ))}
        </p>
      )}

      {/* Phones */}
      {phones && phones.length > 0 && (
        <p className="text-grays text-md mb-4 flex flex-wrap gap-2">
          {phones.map((phone, index) => (
            <span key={index}>
              {phone}
              {index < phones.length - 1 && " | "}
            </span>
          ))}
        </p>
      )}

      {/* Address */}
      <p className="text-grays text-md">{address}</p>
    </div>
  );
};

export default ContactCard;
