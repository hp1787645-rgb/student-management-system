function StudentCard(props) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNo}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;