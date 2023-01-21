import { StackItem } from '../components/stack';

import stack from '../assets/data/stack.json';

function Stack() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>
          <i className="bi bi-stack" /> STACK
        </h3>
      </div>
      <div className="card-body">
        <h4 className="card-title mb-3">
          As tecnologias que mais utilizo atualmente...
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
      </div>
    </div>
  );
}

export default Stack;
