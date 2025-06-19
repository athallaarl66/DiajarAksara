import { GetServerSideProps } from "next";

export default function Home() {
  return null; // Tidak menampilkan apa pun karena sudah di-redirect
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Redirect ke halaman /aksara-angka pada server-side
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false, // Tidak permanen (misalnya untuk login)
    },
  };
};
