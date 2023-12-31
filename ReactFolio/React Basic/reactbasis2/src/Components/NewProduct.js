import './NewProduct.css'
import ProductForm from './ProductForm';


function NewProduct(props) {
 
    function saveProduct(product) {
        console.log("I am inside the new product");
         console.log(product);

         //calling parent function
         props.Dip(product);
    }
   
    return (<div className='new-product'>
       <ProductForm onSaveProduct ={saveProduct} />
    </div>)
}

export default NewProduct;