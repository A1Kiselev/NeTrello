import React from 'react'
import './ListCards.scss'
import {TreButton} from "../Buttons/Buttons";

const ListCards = ({list}) => {

  const isEmptyList = list && !list.cards.length;

  const cardClicked = () => {
    console.log('click');
  }

  const drawCards = () => {
    list.cards.map((el) => {
      return (<div>{el.description}</div>)
    })
  }

  if (isEmptyList) {
    return (
      <div className='list empty'>
        <span onClick={cardClicked}>+ Add new card</span>
      </div>
    )
  }

  return (
    <div className='list'>
      <div>{list.title}</div>
      {drawCards}
      <TreButton onClick={cardClicked} btnText='+ Add Card'/>
    </div>
  )
}

export default ListCards