import React from 'react'
import './index.css';

const ItemCardComponent = (props) => {
    
    return (
        <div className="cards-container">
        {                        
             props.itemList.map((item) => {                            
                return( 
                <div className="card-component">
                    <div className="image-placeholder">

                    </div>
                <div className="item-details">
                    <ul>                            
                        <li>{item.Brand}</li>                        
                        <li>${item.price}</li>
                    </ul>
                </div>
                <div className="item-modify">
                    <div className="edit-item">
                        <div onClick={(e) => props.onAcitonHandler(item.id,'edit')}>Edit</div>                       
                    </div>
                    <div className="delete-item">
                        <div onClick={(e) => props.onAcitonHandler(item.id,'delete')}>Delete</div>
                    </div>                   
                </div>
            </div>)
            })
        }
       </div>   
    )
}

export default ItemCardComponent
