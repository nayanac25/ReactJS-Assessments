import React, { Component } from "react";

class CourseDetails extends Component {

  render() {
    const id = parseInt(this.props.match.params.id);

    const course = this.props.courses.find(
      (c) => c.id === id
    );

    if (!course) return <h3>Course Not Found</h3>;

    return (
      <div className="details-card">
        <h2>{course.name}</h2>
        <p>Duration: {course.duration}</p>
        <p className="price">₹{course.price}</p>

        <button
          className="enroll-btn"
          onClick={() => alert("Enrollment Successful ✅")}
        >
          Enroll Now
        </button>
      </div>
    );
  }
}

export default CourseDetails;