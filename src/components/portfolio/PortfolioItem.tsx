import { Link } from 'react-router-dom';

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
        {image ? (
          <img src={image} alt={description} className="card-img-top" />
        ) : (
          <ImageCap />
        )}
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text text-truncate">{description}</p>
        </div>
        <div className="card-footer">
          <div className="d-grid gap-2 col-4 mx-auto">
            <Link to={url}>
              <button className="btn btn-secondary" type="button">
                Ver
              </button>
            </Link>
          </div>
          {/* <div className="d-grip gap-2">
            <Link to={url}>
              <button type="button" className="btn btn-primary">
                Ver
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

PortfolioItem.defaultProps = {
  image: ImageCap,
};

export default PortfolioItem;
