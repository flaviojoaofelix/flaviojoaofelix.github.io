import { ImageCap } from '../layout/elements';

type PortfolioItemProps = {
  image?: string;
  title: string;
  description: string;
  url: string;
};

function PortfolioItem({
  image,
  title,
  description,
  url,
}: PortfolioItemProps): JSX.Element {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card h-100" style={{ width: '18rem' }}>
        <ImageCap imageSRC={image} description={description} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text text-truncate">{description}</p>
        </div>
        <div className="card-footer">
          <a
            href={url}
            target="_blank"
            rel="external noreferrer"
            className="d-grid gap-1 text-decoration-none"
            data-bs-toggle="tooltip"
            data-bs-title={title}
          >
            <button className="btn btn-primary" type="button">
              visitar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.defaultProps = {
  image: undefined,
};

export default PortfolioItem;
