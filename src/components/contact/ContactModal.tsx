function ContactModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel">
              Get In Touch
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row row-cols-2 row-cols-md-3">
                <div className="col d-flex justify-content-center mb-3">
                  <a
                    href="mailto:flaviojoaofelix.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-danger">
                      <i className="bi bi-envelope" aria-hidden="true" /> Email
                    </button>
                  </a>
                </div>
                <div className="col d-flex justify-content-center mb-3">
                  <a
                    href="https://www.linkedin.com/in/flaviojoaofelix/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-info">
                      <i className="bi bi-linkedin" aria-hidden="true" />{' '}
                      LinkedIn
                    </button>
                  </a>
                </div>
                <div className="col d-flex justify-content-center mb-3">
                  <a
                    href="https://github.com/flaviojoaofelix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-secondary">
                      <i className="bi bi-github" aria-hidden="true" /> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
