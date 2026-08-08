// src/pages/Contact.jsx
const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions? Reach out to our team – we are here to help.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
        <p className="text-gray-700"><strong>Email:</strong> info@labequipment.com</p>
        <p className="text-gray-700 mt-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p className="text-gray-700 mt-2"><strong>Address:</strong> 123 Science Park, Lab City, LS 98765</p>
      </div>
    </div>
  );
};

export default ContactPage;