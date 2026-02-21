import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div className="course-container">
        <h3>Available Courses</h3>
        <div className="course-grid">
          {this.props.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
  }
}

export default CourseList;