type ContentCardProps = {
  icon: string;
  page: string;
  children: React.ReactNode;
};

function ContentCard({ icon, page, children }: ContentCardProps): JSX.Element {
  return (
    <div className="card card-shadow">
      <div className="card-header">
        <h3 className="text-uppercase">
          <i className={icon} /> {page}
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default ContentCard;
