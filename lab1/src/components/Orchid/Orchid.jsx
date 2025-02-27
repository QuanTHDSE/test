import React from "react";
import { ThemeContext } from "../ThemeConext/ThemeContext";
import { useContext } from "react";

export default function Orchid({ name, rating, image, category, onClick, onLike, numberOfLike }) {
    const {theme, dark} = useContext(ThemeContext)
    return (
        <div className="card" onClick={onClick}
            style={{
                backgroundColor: dark ? theme.backgroundColor : theme.backgroundColor,
                color: dark ? theme.color : theme.color,
                width: "18rem"
            }}>

            <img src={image} className="card-img-top" alt="Card image cap"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{rating}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button onClick={(e) => {
                        e.stopPropagation();
                        onLike();
                    }} className="btn btn-outline-primary">
                        ❤️ {numberOfLike}
                    </button>

                    <a href="#" className="btn btn-primary">{onClick} Go</a>
                </div>
            </div>
        </div>
    );
}

