// import "./globals.scss";
// import { NextIntlClientProvider } from "next-intl";
// import fonts from "./fonts/fontsSrc";
// import Header from "./components/commonComponents/Header/Header";
// import Footer from "./components/commonComponents/Footer/Footer";
// import { useEffect } from "react";

// export const metadata = {
//   title: "Eng for UArmy",
//   description: "Eng for UArmy",
// };

// export function generateStaticParams() {
//   return [{ locale: "uk" }, { locale: "en" }];
// }

// // ??? children КИДАТЬ ПРОПСАМИ
// const GlobalError = ({ children, params: { locale }, error, reset }) => {

// 	let messages;

// try {
//     messages = (await import(`../../messages/${locale}.json`)).default;
// } catch (error) {
//     return console.log(error);
// 	}

// 	// useEffect(() => {
//     // // Log the error to an error reporting service
//     // console.error(error);
// 	// }, [error]);

//   return (
//     <html lang={locale}>
//       <NextIntlClientProvider locale={locale} messages={messages}>
//         <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
// <Header />

// {/* <NotFoundPage/> */}
// 				  <h2>Something went wrong!</h2>
// 				  <button onClick={() => reset()}>Try again</button>

//           <Footer />
//         </body>
//       </NextIntlClientProvider>
//     </html>
//   );
// };

// export default GlobalError;
