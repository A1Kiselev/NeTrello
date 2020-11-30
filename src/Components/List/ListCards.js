import React from 'react'
import './ListCards.scss'
import data from '../../TectData/TestData';

const ListCards = ({listId}) => {

  const list = data.lists.find((el) => {
    return el.listId === listId
  });
  const isEmptyList = list && !list.cards.length;

  const cardClicked = () => {
    console.log('click');
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
      {list.cards.map((el) => {return (<div>{el.description}</div>)} ) }
      <div onClick={cardClicked}>+ Add Card</div>
    </div>
  )
}

export default ListCards