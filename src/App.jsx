import { useState } from "react";
import AddClassroom from "./components/AddClassroom";
import ClassroomList from "./components/ClassroomList";
import AllocateExam from "./components/AllocateExam";
import "./styles.css";

function App() {
    const [classrooms, setClassrooms] = useState([]);

    return (
        <div className="container">
            <h2>College Exam Seat Planner</h2>

            <AddClassroom setClassrooms={setClassrooms} />
            <ClassroomList classrooms={classrooms} />
            <AllocateExam classrooms={classrooms} />
        </div>
    );
}

export default App;
