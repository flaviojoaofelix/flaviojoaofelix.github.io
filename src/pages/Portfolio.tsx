import { ContentCard } from '../components/layout';
import PortfolioItem from '../components/portfolio/PortfolioItem';

import portfolioItems from '../assets/data/portfolio.json';

function Portfolio() {
  return (
    <ContentCard icon="bi bi-file-earmark-richtext-fill" title="portfolio">
      <h4 className="card-title mb-3">Meus Projetos e Trabalhos:</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 g-4 justify-content-start">
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
    </ContentCard>
  );
}

export default Portfolio;
