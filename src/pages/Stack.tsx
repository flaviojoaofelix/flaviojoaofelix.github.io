import { StackItem } from '../components/stack';

import stack from '../assets/data/stack.json';
import { ContentCard } from '../components/layout';

function Stack() {
  return (
    <ContentCard icon="bi bi-stack" title="stack">
      <h4 className="card-title mb-3">
        Tecnologias que mais utilizo atualmente
      </h4>
      <div className="row">
        {stack.map((item) => {
          return (
            <StackItem
              key={item.name}
              url={item.url}
              title={item.title}
              name={item.name}
              color={item.color}
            />
          );
        })}
      </div>
    </ContentCard>
  );
}

export default Stack;
