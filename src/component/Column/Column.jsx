import "./Column.css"
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {Task} from "../Task/Task.jsx";

export const Column = ({ tasks }) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy=
                {verticalListSortingStrategy}>
                 {tasks.map((task) => (
                    <Task id={task.id} title={task.title} key={task.id} />
                 ))}
            </SortableContext>
        </div>
    );
};