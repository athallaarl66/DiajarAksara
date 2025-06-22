import "../styles/globals.css"; // Mengimpor global CSS
import type { AppProps } from "next/app"; // Mengimpor type AppProps untuk typing

// Menentukan komponen utama aplikasi
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Merender halaman yang sesuai
}

export default MyApp; // Mengekspor komponen
