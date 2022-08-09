import Navbar from "../components/Navbar";
import Siderbar from "../components/Siderbar";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// export interface Props {
//   children: ReactNode;
//   component: Component;
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 sm:px- md:px-">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Siderbar />
        </div>
        <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl overflox-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
