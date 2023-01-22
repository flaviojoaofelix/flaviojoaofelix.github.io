type ImageCapProps = {
  imageSRC?: string;
  description: string;
};

function ImageCap({ imageSRC, description }: ImageCapProps): JSX.Element {
  if (imageSRC) {
    return <img src={imageSRC} alt={description} className="card-img-top" />;
  }
  return (
    <svg
      className="card-img-top"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Image cap"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96" />
      <text x="35%" y="50%" fill="#dee2e6" dy=".3em">
        Image cap
      </text>
    </svg>
  );
}

ImageCap.defaultProps = {
  imageSRC: undefined,
};

export default ImageCap;
