import { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/bear.png', stat: "" },
        { id: 1, img: '/img/bear.png', stat: "" },
        { id: 2, img: '/img/elephant.png', stat: "" },
        { id: 2, img: '/img/elephant.png', stat: "" },
        { id: 3, img: '/img/fox.png', stat: "" },
        { id: 3, img: '/img/fox.png', stat: "" },
        { id: 4, img: '/img/zebra.png', stat: "" },
        { id: 4, img: '/img/zebra.png', stat: "" },
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState(-1);
    const [allMatched, setAllMatched] = useState(false);
    const navigate = useNavigate();

    function check(current) {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    useEffect(() => {
        if (items.every(item => item.stat === "correct")) {
            setAllMatched(true);
        }
    }, [items]);

    useEffect(() => {
        if (allMatched) {
            const timer = setTimeout(() => {
                navigate("/page3");
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [allMatched, navigate]);


    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}

export default Cards;
