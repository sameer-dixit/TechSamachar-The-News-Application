import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, imgUrl, newsUrl, author, date, source } =props;
    return (
      <div>
        <div className="card my-3">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span className="badge rounded-pill bg-primary m-3">{source}</span>
          </div>

          <img
            src={
              !imgUrl
                ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
