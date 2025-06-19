// components/Box.js

export const Box = ({ image, alt, title, description, link }) => {
  return (
    <div className="box">
      <img className="group" alt={alt} src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link}>
        <a className="btn">Mulai</a>
      </Link>
    </div>
  );
};
