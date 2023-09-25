import { useState } from "react";

function Add(props) {
  let { getData } = props;
  let [name, setName] = useState("");


  function addCourse() {
    fetch("http://localhost:9000/courses", {
      method: "POST",
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
    <form id="addForm" onSubmit={(e) => {
      e.preventDefault();
      if (name) addCourse();
      getData();
      setName("");
    }}>
      <input type="text"
        name="course-name"
        value={name}
        id="courseName"
        placeholder="Enter Course Name..."
        onChange={(e) => {
          setName(e.target.value);
        }} />
      <input type="submit"
        value="Add Course"
        id="addBtn" />
    </form>
  )
}


export default Add;