import "./reviewform.css";
import React, { useState } from "react";
import * as actions from "../../../Redux/actions/index";
import { useDispatch } from "react-redux";


const ReviewForm = () => {
    
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
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={ handleInputChange }
                        required= {false}
                    />
                </label>

                <label>
                    Product Name:
                    <input
                        type="text"
                        name="productname"
                        onChange={ handleInputChange }
                        required= {false}
                    />
                </label>

                <label>
                    Dejanos tu comnetario:
                    <input
                        type="text"
                        name="comment"
                        onChange={handleInputChange}
                        required={false}
                    />
                </label>

                <button type="submit">
                    Send Review
                </button>

            </form>
        </div>
    )
}

export default ReviewForm;