import "./signupcomponent.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/actions/index";
const SignUpComponent = () => {
    const [input, setInput] = useState({
      name: "",
      email: "",
      contact: "",
    });
  
    const [ typeArray, setTypeArray ] = useState([])

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [ e.target.name ] : e.target.value,
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        
        setInput({
            ...input,
            "TypeId"  : typeArray,
        })
        let req = input
        req.TypeId = typeArray
        dispatch(actions.createUser(req))

        console.log(req)
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        handleSubmit();
        alert("User Create Successfully")
    }

    const [ file, setFile ] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }
    
    const handleChangeIMG = (e) => {
        console.log(e.target.files);
    }

    const handleCheckChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);

        if(checked){
            setTypeArray([
                ...typeArray, value
            ])
        } else {
            setTypeArray(typeArray.filter((e) => (e !== value)))
        }
    }

    //const isFieldCompleted = () => {
        //const { input } = state
        //return (input.name === "" &&
        //input.price === 0 &&
        //input.quantity === 0) ? true : false
    //}

    return(
        <div className="Create-Component">
           <form onSubmit={enviarDatos}>
                
                <h4>Crear User</h4>
                
                <div className="createContainer">
                    <ul>
                        <li>
                            <label className="nameLabel">
                                Name (4-30):
                                <input
                                    className='nameInput'
                                    type="text"
                                    name="name"
                                    onChange={handleInputChange}
                                    required={true}
                                    minLength="4"
                                    maxLength="30"
                                />
                            </label>
                        </li>
                        <li>
                            <label className="nameLabel">
                                Email:
                                <input
                                placeholder="example@adress.com"
                                    className='nameInput'
                                    type="text"
                                    name="email"
                                    onChange={handleInputChange}
                                    required={true}
                                    minLength="5"
                                    maxLength="200"
                                />
                            </label>
                        </li>
                        <li>
                            <label className="nameLabel">
                                Contact:
                                <input
                                    className='nameInput'
                                    type="text"
                                    name="contact"
                                    onChange={handleInputChange}
                                    required={true}
                                    minLength="10"
                                    maxLength="14"
                                />
                            </label>
                        </li>
                    </ul>
                    
                    <button //disabled={isFieldCompleted()}
                     className="button-create" type="submit">
                        Create Product
                    </button>
                    
                </div>
            </form> 
        </div>
    )

};
  
  export default SignUpComponent;
  