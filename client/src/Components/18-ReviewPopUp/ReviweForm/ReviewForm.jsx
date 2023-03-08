import "./reviewform.css";
import React, { useState } from "react";
import * as actions from "../../../Redux/actions/index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const ReviewForm = (props) => {
    
    const [ input, setInput] = useState(
        {
            name: "",
            productname: "",
            comment: "", 
        }
    )

    const handleInputChange = (e) => {
        const {name, value } = e.target;

        setInput({
            ...input,
            [name]: value,
        });
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let req = input;
        dispatch(actions.createReview(req));

        console.log(req, "soy REQ");
        alert("Review send Successfully");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="ReviewFormContainer">
                <label className="NameFormR">
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={ handleInputChange }
                        required= {false}
                        className="inputNameForm"
                    />
                </label>

                <label>
                    Product Name:
                    <input
                        type="text"
                        name="productname"
                        onChange={ handleInputChange }
                        required= {false}
                        className="inputProductNameForm"
                    />
                </label>

                <label>
                    Dejanos tu comentario:
                    <input
                        type="text"
                        name="comment"
                        onChange={handleInputChange}
                        required={false}
                        className="inputcomentForm"
                    />
                </label>
                <Link to="/">
                    <button className="SendReview" type="submit">
                        Send Review
                    </button>
                </Link>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;