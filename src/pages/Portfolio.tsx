import portfolioItems from '../assets/data/portfolio.json';
import PortfolioItem from '../components/portfolio/PortfolioItem';

function Portfolio() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>
          <i className="bi bi-file-earmark-richtext-fill" /> PORTFOLIO
        </h3>
      </div>
      <div className="card-body">
        <h4 className="card-title mb-3">Meus Projetos e Trabalhos:</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 g-4 justify-content-center">
          {portfolioItems.map((item) => {
            return (
              <PortfolioItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
