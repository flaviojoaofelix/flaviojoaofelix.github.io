import '../../styles/components/stack.css';

type StackItemProps = {
  url: string;
  title: string;
  name: string;
  color: string;
};

function StackItem({ url, title, name, color }: StackItemProps) {
  return (
    <div className="col-2 text-center pt-3 pb-3 stack-animate-item">
      <a
        href={url}
        target="_blank"
        rel="external noreferrer"
        className="text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-title={title}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          style={{ fill: color, maxWidth: '4em' }}
        >
          <use xlinkHref={`./assets/images/stackIcons.svg#icon-${name}`} />
        </svg>
        <div className="d-none d-md-block">
          <h5 className="text-truncate">{title}</h5>
        </div>
      </a>
    </div>
  );
}

export default StackItem;
