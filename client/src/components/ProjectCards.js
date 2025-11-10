import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, url }) => {
  const CardContent = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col xs={12} md={4} className="project-card">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </Col>
  );
};
