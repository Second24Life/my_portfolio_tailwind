// fonts
import { Sora } from "next/font/google";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import TopLeftImg from "@/components/TopLeftImg";
import Header from "@/components/Header";
import ScrollTopArrow from "@/components/ScrollTopArrow";

const Layout = ({ children }) => {
  return (
    <div
      className={`h-screen w-screen bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <ScrollTopArrow />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
