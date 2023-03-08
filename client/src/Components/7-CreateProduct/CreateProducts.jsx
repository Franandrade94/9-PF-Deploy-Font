import "./createproducts.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/actions/index";

const CreateProduct = () => {
    
    const [input, setInput] = useState({
        name: "",
        image: "",
        quantity: 0,
        description: "",
        price: 0,
        TypeId: 0,
    });

    const [typeArray, setTypeArray] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "image") {
          setInput({
            ...input,
            [name]: value,
            image: e.target.files[0],
          });
        } else {
          setInput({
            ...input,
            [name]: value,
          });
        }
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let req = input;
        req.TypeId = typeArray;
        console.log(req, 'RATING FOMR');
        dispatch(actions.createProduct(req));
       
        console.log(req, "soy create req");
        alert("Product Create Successfully");
        setInput({
          name: "",
          image: "",
          quantity: 0,
          description: "",
          price: 0,
          TypeId: 0,
        });
        window.location.reload();
      };
         
    const handleCheckChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);

        if (checked) {
            setTypeArray([
                ...typeArray, value
            ])
        } else {
            setTypeArray(typeArray.filter((e) => (e !== value)))
        }
    }

    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "bonitadevoto");
        setLoading(true);
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/diw3vl6dr/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const file = await res.json();
        setInput({
            ...input,
            image: file.secure_url,
        });
        setLoading(false);
    };
    
    return(
        <div className="Create-Component">
           <form onSubmit={handleSubmit}>
                
                <h4>Crear Producto</h4>
                
                <div className="createContainer">
                    <ul>
                        <li>
                            <label className="ImageLabel" id="src-file">
                               <input
                                type="file"
                                name="file"
                                placeholder="Load image"
                                onChange={uploadImage}
                               />
                            </label>
                            {loading && <p>Cargando imagen...</p>}
                        </li>

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
                            <div className="CategoriaContainer">
                                <label className="categoriaLabel" htmlFor="">
                                    Categoria:
                                </label>
                
                                <div className="AllCategoriesContainer">
                            
                                    <label htmlFor="">
                                        Animales
                                        <input 
                                            name="TypeId"
                                            type="radio"
                                            value="1"
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Bizcocho Ceramico
                                        <input 
                                            name="TypeId"
                                            type="radio"value="2" 
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Cemento
                                        <input
                                            name="TypeId" 
                                            type="radio"value="3"
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Colgantes
                                        <input 
                                            name="TypeId"
                                            type="radio"value="4" 
                                            onChange={handleCheckChange} />
                                    </label>
                           
                                    <label>
                                        Fridas & Babies
                                        <input
                                            name="TypeId"
                                            type="radio"
                                            value="5" 
                                            onChange={handleCheckChange} />
                                    </label>
                           
                                    <label>
                                        Otros
                                        <input
                                            name="TypeId" 
                                            type="radio"
                                            value="6" 
                                            onChange={handleCheckChange} />
                                    </label>

                                </div>  
                            </div>
                        </li>

                        <li>                        
                            <label className="quantityLabel">
                                Quantity(1-50): 
                                <input
                                    className="quantityInput"
                                    type="number"
                                    name="quantity"
                                    required={true}
                                    min="1"
                                    max="50"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>

                        <li>
                            <label className="descriptionLabel">
                                Description:
                                <input
                                    className='descriptionInput'
                                    type="text"
                                    name="description"
                                    required={true}
                                    minLength="4"
                                    maxLength="300"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label className="priceLabel">
                                Price: 
                                <input
                                    className="priceInput"
                                    type="number"
                                    required={true}
                                    name="price"
                                    step=".01"
                                    onChange={handleInputChange}
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
 export default CreateProduct;