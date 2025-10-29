import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto pt-10 border-b border-gray-700 px-5">
        <div className="grid grid-cols-12 gap-6">
          {/* Logo & About */}
          <div className="lg:col-span-3 col-span-12 text-center">
            <a href="/" className="inline-block mb-4">
              <img
                src="https://travlla.dexignzone.com/tailwind/demo/assets/images/logo-light.png"
                alt="Travel Explorer Logo"
                width="160"
                height="80"
                className="mx-auto"
              />
            </a>
            <p className="text-base mb-4">
              Travlla is a travel inspiration website that helps you explore the
              world one destination at a time.
            </p>

            {/* Social Links */}
            <ul className="flex justify-center mt-5 space-x-3">
              {[FaTwitter, FaFacebookF, FaInstagram, FaPinterestP].map(
                (Icon, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg hover:bg-blue-500 transition"
                    >
                      <Icon />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 col-span-6 mb-5">
            <h3 className="text-white mb-4 text-xl font-semibold">Explore</h3>
            <ul className="space-y-2">
              {["About Us", "FAQ", "Services", "Team", "Blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2 col-span-6 mb-5">
            <h3 className="text-white mb-4 text-xl font-semibold">
              Destinations
            </h3>
            <ul className="space-y-2">
              {["Tokyo", "France", "Dubai", "Kenya", "Vietnam"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 col-span-12">
            <h3 className="text-white mb-4 text-xl font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-3">
                  <FaPhoneAlt className="text-white" />
                </div>
                <a href="tel:1236540214" className="hover:text-blue-400">
                  123 654 0214
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-3">
                  <FaEnvelope className="text-white" />
                </div>
                <a
                  href="mailto:travllainfo@gmail.com"
                  className="hover:text-blue-400"
                >
                  travllainfo@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-3">
                  <FaHome className="text-white" />
                </div>
                <span>55/11 Ronin Tower, New York</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6 text-center border-t border-gray-700 mt-8 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">Travlla</span> — All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
