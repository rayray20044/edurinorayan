import './game2.css'
import {useNavigate} from "react-router-dom";
import {closestCorners, DndContext} from "@dnd-kit/core";
import {useState} from "react";
import { Column } from "../component/Column/Column.jsx";

export function Game2() {

    const [tasks, setTasks] = useState([
        { id: 1, title: "1"},
        { id: 2, title: "2"},
        { id: 3, title: "3"},
    ]);

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/page3');
    };

    return (
        <div className="container4">

            <h4>game2</h4>

            <DndContext collisionDetection={closestCorners}
            >
                <Column tasks={tasks}/>
            </DndContext>

            <button className="button3" onClick={handleNextClick}>Done!!</button>


        </div>


    );
}