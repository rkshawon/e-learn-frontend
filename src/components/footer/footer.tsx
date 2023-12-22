"use client";

import { Button } from "../ui/button";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <h6 className="text-blue-gray mb-4">{title}</h6>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="py-1 font-normal text-gray-700 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <h6 className="mb-3 text-left">Subscribe</h6>
            <p className="text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first to get
              informed about fresh sales.
            </p>
            <small className="font-medium mb-2 text-left">Your Email</small>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* Input component goes here */}
                <input
                  type="email"
                  className="w-full border rounded-md bg-background px-3 py-2 text-sm ring-offset-background border-input placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Email"
                />
                <p className="font-medium mt-3 text-sm text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </p>
              </div>

              <Button>Send</Button>
            </div>
          </div>
        </div>
        <p className="text-blue-gray md:text-center mt-16 font-normal text-gray-700">
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
