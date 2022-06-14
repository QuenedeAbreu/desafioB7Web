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
      .container-title-left{
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        h1{
          margin-left: 10px;
          font-size: 1.5rem;
          border-bottom: ${Colors.white} solid 1px ;

        }
      }
      .container-title-right{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        a{
          text-decoration: none;
          color: ${Colors.white};
          font-size: 1rem;
          display: block;
          padding: 10px;
          border-radius: 5px;
          border: ${Colors.white} solid 1px ;
          transition: background-color 0.3s ease-in-out;
          font-weight: bold;
            &:hover{
              background-color: ${Colors.white};
              color: ${Colors.primary};
            }
          }
      }
    } 

    .container-body{
      width: 100%;
      height:calc( 100% - 40px );
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      .container-body-left{
        min-width: 20%;
        height: 100%;
        background-color: ${Colors.primary};
        border-radius: 0 0 0 10px;

        .title-notes{
          width: 100%;
          height: 20px;
          display: flex;
          align-items: center;
         
          border-bottom: ${Colors.white} solid 1px ;
          h1{
            margin-left: 10px;
            font-size: 1rem;
          }
        }
        ul{
          list-style: none;
          li{
            width: 100%;
            height: 30px;

          }
        }
      }

      .container-body-righ{
        width: 80%;
        height: 80%;
        background-color: ${Colors.secondary};
        border-radius: 0 0 10px 0;
        display: flex;
        flex-direction: column;
    
        justify-content: center;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
        form{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .input-title{
            width: 100%;
            height: 30px;
            border-bottom: ${Colors.white} solid 1px ;
            margin-bottom: 10px;
            input[type="text"]{
              width: 100%;
              height: 30px;
              background-color: transparent;
              border: none;
              outline: none;
              color: ${Colors.white};
            }
          }
          textarea{
            max-width: 100%;
            height: 100%;
            background-color: transparent;
            border: ${Colors.white} solid 1px ;
            outline: none;
            color: ${Colors.white};
            resize: none;
          }
          .button-submit{
            width: 100%;
            height: 30px;
            margin-top: 10px;
           
            button{
              width: 100%;
              height: 30px;
              background-color: ${Colors.primary};
              border: none;
              outline: none;
              color: ${Colors.white};
              cursor: pointer;
              transition: background-color 0.3s ease-in-out;
              &:hover{
                background-color: ${Colors.buttonsOne};
              }
            } 
          }
          .input-color{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            h1{
              margin-left: 10px;
              font-size: 0.8rem;
              width: 30%;
            }
            select{
              width: 70%;
              height: 30px;
              
              
              border: none;
              outline: none;
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