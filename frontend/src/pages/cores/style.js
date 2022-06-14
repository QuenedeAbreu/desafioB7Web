import Styled from 'styled-components'
import Colors from '../../helpers/colors';

export const HomeContainer = Styled.div`  
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  background-color: ${Colors.primary};
  .buttons{
    padding: 10px;
    width: 10%;
    height: 30px;
    border: ${Colors.white} solid 1px ;
    border-radius: 5px;
    margin-left: 10px;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    font-size: 1.2rem;
    cursor: pointer;
  }
  .container {
    width: 70%;
    height: 70%;
    border: ${Colors.white} solid 1px ;
    border-radius: 10px;

    
    .container-title{
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      h1{
        margin-left: 10px;
        font-size: 1.5rem;
        border-bottom: ${Colors.white} solid 1px ;

      }
    } 

    .container-body{
      width: 100%;
      height:calc( 100% - 40px );
      display: flex;
      align-items: center;
      flex-direction: column;
      form{
        width: 100%;
        min-height: 10%;
        display: flex;
        margin-top: 10px;
       
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        input{
          width: 40%;
          height: 30px;
          border: ${Colors.white} solid 1px ;
          border-radius: 5px;
          margin-bottom: 10px;
          padding: 0 10px;
        }
        button,.buttons{
          width: 10%;
          height: 30px;
          border: ${Colors.white} solid 1px ;
          border-radius: 5px;
          margin-left: 10px;
          background-color: ${Colors.primary};
          color: ${Colors.white};
          font-size: 1.2rem;
          cursor: pointer;
        }
      }
      
      
      table{
        width: 100%;
       
        
        thead{
          width: 100%;
          height: 40px;
          th{
            width: 50%;
            height: 100%;
            display: flex;
            border: ${Colors.white} solid 1px ;
            text-align: center;
           
            
            font-size: 1.5rem;
          }
        }
        tr{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: ${Colors.white} solid 1px ;
          text-align: center;
          td{
            width: 50%;
            height: 100%;
            display: flex;
          
            text-align: center;
            .buttons-icons{
              width: 20px;
              height: 20px;
              margin-left: 10px;
              cursor: pointer;
              color: ${Colors.white};
            }
          }
         
        }
      }
    }


  }

`;

export const ItemNoteColor = Styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  border: ${Colors.white} solid 1px ;
  background-color: ${props => props.colorbg};  
`;