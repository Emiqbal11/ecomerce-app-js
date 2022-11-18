import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem'
import { categories } from './data'

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
  ${mobile({display:'flex',flexDirection:'column'})}

`;

const Categories = () => {
  return (
    <Container>
{
    categories.map((item)=>(
        <CategoryItem item={item} key={item.id}/>
    ))
}
    </Container>
  )
}

export default Categories