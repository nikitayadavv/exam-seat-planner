import { useState } from "react";

export default function AllocateExam({ classrooms }) {
    const [students, setStudents] = useState("");
    const [result, setResult] = useState("");

    const allocate = () => {
        let remaining = Number(students);
        if (remaining <= 0) {
            setResult("Invalid student count");
            return;
        }

        const sorted = [...classrooms].sort((a, b) => a.floorNo - b.floorNo);
        let used = [];

        for (let room of sorted) {
            if (remaining <= 0) break;
            used.push(room);
            remaining -= room.capacity;
        }

        if (remaining > 0) {
            setResult("Not enough seats available");
        } else {
            setResult(
                "Allocated Rooms:\n" +
                used.map(r => r.roomId).join(", ")
            );
        }
    };

    return (
        <div className="box">
            <h4>Allocate Exam Seats</h4>
            <input
                type="number"
                placeholder="Total Students"
                value={students}
                onChange={e => setStudents(e.target.value)}
            />
            <button onClick={allocate}>Allocate</button>
            <pre>{result}</pre>
        </div>
    );
}
