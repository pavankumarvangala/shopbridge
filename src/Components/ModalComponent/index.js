import React,{useState,useEffect} from 'react';
import './index.css';
import { Button, Modal } from 'react-bootstrap';
import Input from '../Input';

const ModalPopup = (props) => {  
    const initialValues = {
        name:'',
        brand:'',
        price:'',
        nameError:false,
        brandError: false,
        priceError: false,        
    }     
    const [details, setDeatils] = useState({});
    useEffect(() => {        
        if(props.details){
            setDeatils({
                    name: props?.details?.itemName ? props.details.itemName : '',
                    brand:props?.details?.Brand ? props.details.Brand : '',
                    price:props?.details?.price ? props.details.price : '',
                    nameError: props?.details?.itemName ? props?.details?.itemName === '' : false,
                    brandError:props?.details?.Brand ? props?.details?.Brand === '' : false,
                    priceError: props?.details?.price ? props?.details?.price === '' : false,
            })
        }
        else{
            setDeatils(initialValues);
        }        
    },[props])
    const saveDetails = () => {          
        setDeatils({...details, 
            nameError: details.name === '', 
            brandError: details.brand === '',
            priceError: details.price === '',
        })         
         
        if(details.name !== ''  && details.brand !== ''  && details.price !== ''){
            props.savedDetails(details.name, details.brand, details.price, props?.details?.id);                         
            props.onHide();
        }            
    }  
    const handleErrors = (name,val) => {
        if(name === 'name'){            
            setDeatils({...details, name: val, nameError: val === ''})                
        }
        if(name === 'brand'){
            setDeatils({...details, brand: val, brandError: val === '' })                        
        }
        if(name === 'price'){
            setDeatils({...details, price: val, priceError: val === ''})            
        }
    }
    const handleChange = (e) => {    
        handleErrors(e.target.name, e.target.value)           
    }  
    return (
      <>        
       <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Input                 
                label="Product Name"
                type="text"
                placeholder="Enter name"                
                onChange={(e) => handleChange(e)}
                name='name'
                hasError={details.nameError}
                value={details.name}             
           />
           <Input                 
                label="Product Brand"
                type="text"
                placeholder="Enter name"                
                onChange={(e) => handleChange(e)}
                name="brand"
                hasError={details.brandError}     
                value={details.brand}        
           />
           <Input                 
                label="Product Price"
                type="number"
                placeholder="Enter name"                
                onChange={(e) => handleChange(e)}
                name="price"
                hasError={details.priceError}   
                value={details.price}          
           />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="light" onClick={props.onHide}>Cancel</Button>
            <Button variant="primary" onClick={saveDetails}>Save</Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalPopup;