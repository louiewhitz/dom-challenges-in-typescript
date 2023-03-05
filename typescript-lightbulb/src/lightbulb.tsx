import React, {useState} from 'react';

interface LightBulbProps {
    className: string;
  }
  
  const LightBulb: React.FC<LightBulbProps> = ({ className }) => {
    const [isOn, setIsOn] = useState(false);
    const bulbClass = `circle ${isOn ? 'light' : 'dark'}`;
    const bgClass = `container ${isOn ? 'bg-light' : 'bg-dark'}`;
  
    const handleClick = () => {
      setIsOn(!isOn);
    };
  
    return (
      <>
     
        <div className={bgClass}>
        <div className={bulbClass} onClick={handleClick}></div>
        </div>
        
      </>
    );
  };
  
  export default LightBulb;