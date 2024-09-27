import Switch from 'react-switch';
import { useDarkMode } from '../context/ModeContext';
import { useEffect } from 'react';

const SwitchButton = () => {

    const {mode, toogleMode} = useDarkMode()


    const updateBody = (mode)=>{
      document.body.className = mode ? 'isDark' : ''
    }
   
    useEffect(()=>{
    
    
      updateBody(mode)
    },[mode])
   
    const handleClick = ()=>{
     toogleMode()
    }
  return (
    <Switch
    checked={mode}
    onChange={handleClick}
    onColor="#57bffc"
    onHandleColor="#2693e6"
    handleDiameter={18}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={14}
    width={35}
    className="react-switch "
    id="material-switch"
  />
  )
}

export default SwitchButton