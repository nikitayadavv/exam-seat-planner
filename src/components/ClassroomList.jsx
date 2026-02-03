export default function ClassroomList({ classrooms }) {
    return (
        <div className="box">
            <h4>Classroom List</h4>
            {classrooms.length === 0 && <p>No classrooms added</p>}
            <ul>
                {classrooms.map((c, i) => (
                    <li key={i}>
                        {c.roomId} | Capacity: {c.capacity} | Floor: {c.floorNo}
                    </li>
                ))}
            </ul>
        </div>
    );
}
