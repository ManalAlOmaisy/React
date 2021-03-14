import React from 'react'
import uuid from "react-uuid"


const GuaranteeItem = ({imgItem, titleItem, descriptionItem }) =>{
  return (
   <div>  
      <img className="guarantee-img" src={imgItem} alt=""/>
      <h3>{titleItem}</h3>
      <p>{descriptionItem}</p>  
  </div>)
  
};

const Guarantee = () => {

  const lists =[
    {
      id:uuid(),
      img: "/img/f-delivery.png",
      title:"Free shipping",
      description: "Fusce urna  quam, euismod sit amet mollis  euismod sit amet mollis vestbuum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus."
    },
    {
        id:uuid(),
        img: "/img/coin.png",
        title:"100% Money back",
        description: "urna quam, euismod sit amet mollis quis, vestbuum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus."
      },
      {
        id:uuid(),
        img: "/img/chat.png",
        title:"Online support 24/7",
        description: "urna quam, euismod sit amet mollis quis, vestbuum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus."
      }
  ]
    return (
        <div className= "guarantee">
         {lists.map(list => <GuaranteeItem key= {list.id} imgItem={list.img} titleItem={list.title} descriptionItem={list.description} />)}
        </div>
    )
}

export default Guarantee
