import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Editcourse(props) {
  let { getData } = props;
  let { id } = useParams();
  let [name, setName] = useState("");
  let [course, setCourse] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/courses/${id}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [])


  function edit() {
    fetch(`http://localhost:9000/courses/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
      })
    }).then(res => res.json())
      .then(data => console.log(data));
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      edit();
      getData();
      navigate("/");

    }}>
      <input type="text"
        name="update-course"
        id="update"
        placeholder={course.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input type="submit"
        value="Update"
        id="updateBtn" />
    </form>
  )
}

export default Editcourse;