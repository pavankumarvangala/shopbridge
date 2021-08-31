import React,{useEffect, useState} from 'react';
import './App.css';
import ItemCardComponent from '../src/Components/CardComponent';
import { Button } from 'react-bootstrap';
import ModalPopup from '../src/Components/ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

// Product Details - Mock Data Instead of this we can get data from API as well
const item_details = [
  {id:1,itemName:'Jeans',Brand:'Lee-Cooper',price:'299'},
  {id:2,itemName:'shirts',Brand:'Pepe Jeans',price:'199'},
  {id:3,itemName:'tops',Brand:'Levis',price:'249'},
  {id:4,itemName:'casuals',Brand:'Basics',price:'359'},
  {id:5,itemName:'shoes',Brand:'Colt',price:'122'},
  {id:6,itemName:'caps',Brand:'United colors',price:'99'},
]


function App(props) {
  const [productDetails, setProductDetails] = useState(item_details);
  const [newItem, setNewItem] = useState();
  const [modalDetails, setModalDetails] = useState({
    modalVisible: false,
    editMode: false,
    id:''
  });

  useEffect(() => {
    setProductDetails(item_details)
  },[])

  const filledDetails = (name,brand,price,id) => {
    if(id) {
      let temp = [...productDetails];
      temp[id - 1].itemName = name;
      temp[id - 1 ].Brand = brand;
      temp[id - 1].price = price;
      setProductDetails([...temp])
    }
    else setProductDetails([...productDetails, {id:productDetails.length + 1,
                        itemName: name, Brand:brand, price:price} ])
  }
  const onAcitonHandler = (id,action) =>{  
    if(action === 'edit') setModalDetails({...modalDetails, modalVisible:true,editMode:true,id:id - 1})
    else {
      setProductDetails(productDetails.filter( data =>  data.id !== id ))    
    }
  }
  return (
    <div className="App">      
      <header className="App-header">  
          <Button className="addnewbtn" variant="primary" onClick={() => setModalDetails({...modalDetails, modalVisible:true,editMode:false})}>Add New Item</Button>
          <ModalPopup
            show={modalDetails.modalVisible}
            onHide={() => setModalDetails({...modalDetails, modalVisible:false})}
            title={modalDetails.editMode ? 'Update Item' : 'Add New Item'}
            savedDetails={filledDetails}         
            details={modalDetails.editMode === true ? productDetails[modalDetails.id] : undefined}        
          />
            <ItemCardComponent  itemList={productDetails} onAcitonHandler={onAcitonHandler}/>
      </header>
    </div>
  );
}

export default App;
