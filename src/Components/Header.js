import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
// import { useSelector } from 'react-redux';
import {useSelector } from 'react-redux';

function Header() {
  const[burgerstatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  console.log(cars)

  return (
    <Container>
      <a href = "/" alt = "">
          <img src="/images/logo.svg" alt="" />
      </a>
      <Menu> 
      {cars && cars.map((car, index)=>{
        return(
        <a key= {index} href="/">{car}</a>
        )
      })}
      </Menu>
      <RightMenu>
        <a href="/" alt="">Shop</a>
        <a href="/" alt="">Account</a>
        <CustomMenu onClick={()=> setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNavMenu show = {burgerstatus}>
      <CLoseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(false)} />
      </CLoseWrapper>
      {cars && cars.map((car, index)=>{
        return(
          <li><a key ={index} href="/">{car}</a></li>
        )
      })}
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-In Inventory</a></li>
        <li><a href="/">Cyber-truck Inventory</a></li>
        <li><a href="/">RoadStar Inventory</a></li>
        <li><a href="/">Tesla Inventory</a></li>
      </BurgerNavMenu>
    </Container>
  )
}

export default Header


const Container = styled.div`
        min-height: 60px;
        position:fixed;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 20px;
        top:0;
        left:0;
        right:0;
        z-index:1;

`


const Menu = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
      flex:1;
      a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;

      }
      @media(max-width:768px){
        display:none;
        
      }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;

      }

`

const CustomMenu = styled(MenuIcon)`
      cursor:pointer;

`

const BurgerNavMenu = styled.div`
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      background:white;
      width:300px;
      list-style:none;
      padding:20px;
      text-align:start;
      justify-content:flex-start;
      transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition:transform 0.2s ease-in-out;

      li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);

        a{
          font-weight:600;
        }
        
      }
      

`

const CLoseWrapper = styled.div`
      display:flex;
      justify-content:flex-end;
      
      `

const CustomClose = styled(CloseIcon)`
      cursor:pointer;

`