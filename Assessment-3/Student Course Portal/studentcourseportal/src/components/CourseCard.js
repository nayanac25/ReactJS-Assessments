import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { id, name, duration } = this.props.course;

    return (
      <div className="course-card">
        <h4>{name}</h4>
        <p>⏱ {duration}</p>
        <Link className="btn" to={`/course/${id}`}>View Details</Link>
      </div>
    );
  }
}

export default CourseCard;