import React from "react";
import CourseCard from "./CourseCard";

export type CoursesProps = {
  courses: any;
  onDeleteClick: (course: any) => void;
};

const CourseList = (props: CoursesProps) => {
  const { courses, onDeleteClick } = props;
  return (
    <div className="row">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            course={course}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
