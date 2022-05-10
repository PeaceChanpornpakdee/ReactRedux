import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseImage({ id, title, slug }) {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <Link to={"/course/" + slug}>
        <img
          className="contain-fit"
          src={`src/components/images/${id}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = `src/components/images/default.jpg`;
          }}
          width="300"
          alt={`${title}`}
        />
      </Link>
    </div>
  );
}
CourseImage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

function CourseDetails({ title, authorName, category, course, onDeleteClick }) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-0">
        <h3 className="text-truncate">{title}</h3>
      </div>
      <div>
        <p className="card-description">{authorName}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Category:</h5>
            <h6>{category}</h6>
          </div>
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDeleteClick(course)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
CourseDetails.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.any,
};

function CourseCard({ course, onDeleteClick }) {
  const { id, title, authorName, category, slug } = course;
  return (
    <div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-sm-8 col-xs-8">
      <div className="card card-height p-4 mt-4">
        <CourseImage id={id} title={title} slug={slug} />
        <CourseDetails
          title={title}
          authorName={authorName}
          category={category}
          course={course}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}
CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.any,
};

export default CourseCard;
