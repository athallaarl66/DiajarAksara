// components/Box.js
import Image from "next/image"; // Import Image component from Next.js
import Link from "next/link"; // Import Link component from Next.js

export const Box = ({ image, alt, title, description, link }) => {
  return (
    <div className="box">
      <Image
        className="group"
        alt={alt}
        src={image}
        layout="responsive" // Optionally use layout='responsive' for better handling of image sizes
        width={500} // Define a width for the image (or use 'intrinsic' if you want automatic sizing)
        height={300} // Define a height for the image (or use 'intrinsic' for auto-height)
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link}>
        <a className="btn">Mulai</a>
      </Link>
    </div>
  );
};
