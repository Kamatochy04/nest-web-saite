import About from "@/section/about/About";
import Contact from "@/section/contact/Contact";
import Kwork from "@/section/kwork/Kwork";
import Main from "@/section/main/Main";
import Services from "@/section/services/Services";
import Telegram from "@/section/telegramChanel/TelegramChanel";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Telegram />
      <Kwork />
      <Services />
      <Contact />
    </>
  );
}
