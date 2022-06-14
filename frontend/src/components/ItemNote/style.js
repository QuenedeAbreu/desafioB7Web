import Styled from 'styled-components'
import Colors from '../../helpers/colors';

export const Item = Styled.div`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${Colors.white} solid 1px ;
  


   
  .item-note{
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a{
      width: 100%;
      height: 100%;
      margin-left: 10px;
      text-decoration: none;
      color: ${Colors.white};
      display: flex;
      flex-direction: row;
      align-items: center;
      
    }
    h1{
      margin-left: 10px;
      font-size: 0.8rem;
    }
    .iconDelete{
      width: 20px;
      height: 20px;
      color: ${Colors.danger}; 
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

 
`;

export const ItemNoteColor = Styled.div`
  width: 15px;
  height: 15px;
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  border: ${Colors.white} solid 1px ;
  background-color: ${props => props.colorbg};  
`;