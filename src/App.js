import Addcourse from "./components/Addcourse";
import Courses from "./components/Courses";
import Editcourse from "./components/Editcourse";
import { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  let [courses, setCourses] = useState([]);
  async function getData() {
    try {
      const res = await fetch("http://localhost:9000/courses");
      if (!res.ok) {
        throw new Error("Error ", res.status);
      }
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function deleteCourse(id) {
    fetch(`http://localhost:9000/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => getData());
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Course Managment</h2>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route
              path=""
              element={
                <>
                  <div className="title">Avaiable courses</div>
                  <Addcourse getData={getData} />
                  <Courses courses={courses} deleteCourse={deleteCourse} />
                </>
              }
            />
          </Route>

          <Route path="edit/:id" element={<Editcourse getData={getData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
