import './globals.css';
import fonts from './fonts/fontSrc'
import Header from './components/commonComponents/Header/Header';
import Footer from './components/commonComponents/Footer/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fonts.arial.className} ${fonts.furore.className}`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
