import footer_logo from "../../assets/logo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinterest_icon from "../../assets/pinterest_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

export const Footer = () => {
  const icons = [instagram_icon, pinterest_icon, whatsapp_icon];
  return (
    <div className="footer flex flex-col justify-center items-center gap-12 mt-6">
      <div className="flex items-center gap-10">
        <div className="footer-logo flex items-center gap-x-5">
          <img src={footer_logo} alt="footer-logo" className="w-[80px]" />
          <p className="text-3xl font-bold">Untitled Shop</p>
        </div>
        <div className="footer-social-icons flex gap-x-5">
          {icons.map((icon, index) => (
            <div
              className="footer-icons-container p-3 cursor-pointer"
              key={index}
            >
              <img src={icon} alt="social media icons" />
            </div>
          ))}
        </div>
      </div>
      <ul className="footer-links flex list-none gap-x-12 text-lg">
        {["Company", "Product", "Offices", "About", "Contact"].map(
          (link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          ),
        )}
      </ul>

      <div className="footer-copyright flex flex-col items-center gap-8 w-[100%] mb-8 text-lg">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>
          © 2023 Untitled Shop. All rights reserved. Designed by
          <span> @Chao.Wg</span>
        </p>
      </div>
    </div>
  );
};
