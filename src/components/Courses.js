
import { Link } from "react-router-dom";

function Courses(props) {
  const { courses, deleteCourse } = props;



  let renderCourse = () => {
    return (
      courses.map(course => {
        return (
          <li key={course.id}>
            <span className="course-name">{course.name}</span>
            <div className="btns">
              <Link to={`/edit/${course.id}`}>Edit Course</Link>

              <button onClick={() => {
                deleteCourse(course.id);
              }}>Delete Course</button>
            </div>
          </li>
        )
      })

    )
  }
  return (
    <div className="courses">
      {courses.length > 0 ?
        <ul>
          {renderCourse()}
        </ul>
        :
        <div className="no-data">No Data To Show.</div>
      }

    </div>
  )
}

export default Courses;