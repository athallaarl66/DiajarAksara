import { GetServerSideProps } from "next";

// Fungsi Home yang tidak menampilkan apa pun, karena hanya untuk melakukan redirect
export default function Home() {
  return null; // Tidak menampilkan apa pun karena sudah di-redirect
}

// Menyediakan logika server-side untuk melakukan redirect
export const getServerSideProps: GetServerSideProps = async () => {
  // Tidak perlu `context` di sini
  return {
    redirect: {
      destination: "/dashboard", // Halaman yang akan dituju
      permanent: false, // Redirect tidak permanen
    },
  };
};
