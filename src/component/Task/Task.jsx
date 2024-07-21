import './Task.css'

export const Task = ({id, title}) => {
    return (
        <div className="task">
            <input type="checkbox" className="checkbox"/>
            {title}
        </div>
    );
};