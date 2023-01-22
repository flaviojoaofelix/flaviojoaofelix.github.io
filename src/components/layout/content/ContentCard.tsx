type ContentCardProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

function ContentCard({ icon, title, children }: ContentCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="mb-0 text-uppercase">
          <i className={icon} /> {title}
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default ContentCard;
