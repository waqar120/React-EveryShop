import React,{useState} from 'react'
import { CartBtnStyle } from '../Style/CartBtnStyle';

const ButtonWithState = ({ buttonText }) => {
  const cartbtnstyle=CartBtnStyle();
  const [isGreen, setIsGreen] = useState(false);
  const handleButtonClick = () => {
    setIsGreen(!isGreen);
  };
  return (
    <button style={{margin:'5px', padding:'5px', width:'50px', backgroundColor:'white', border:'1px solid grey'}}
      className={`btn ${isGreen ? 'green-button' : ''}`}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
}
export default ButtonWithState