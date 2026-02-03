import { useState } from "react";

export default function AddClassroom({ setClassrooms }) {
    const [roomId, setRoomId] = useState("");
    const [capacity, setCapacity] = useState("");
    const [floorNo, setFloorNo] = useState("");
    const [nearWashroom, setNearWashroom] = useState(false);

    const addRoom = () => {
        if (!roomId || capacity <= 0 || floorNo === "") {
            alert("Invalid input");
            return;
        }

        setClassrooms(prev => [
            ...prev,
            {
                roomId,
                capacity: Number(capacity),
                floorNo: Number(floorNo),
                nearWashroom
            }
        ]);

        setRoomId("");
        setCapacity("");
        setFloorNo("");
        setNearWashroom(false);
    };

    return (
        <div className="box">
            <h4>Add Classroom</h4>
            <input placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)} />
            <input type="number" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} />
            <input type="number" placeholder="Floor No" value={floorNo} onChange={e => setFloorNo(e.target.value)} />
            <label>
                <input type="checkbox" checked={nearWashroom} onChange={e => setNearWashroom(e.target.checked)} />
                Near Washroom
            </label>
            <button onClick={addRoom}>Add</button>
        </div>
    );
}
