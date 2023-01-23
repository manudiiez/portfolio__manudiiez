import { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {

    const [navState, setNavState] = useState(false);

    const handleChangeState = () => {
        setNavState(!navState)
        if(navState){
            enableScroll()
        }else{
            disableScroll()
        }
    }
    const handleChangeStateFalse = () => {
        setNavState(false)
        enableScroll()
    }

    function disableScroll() {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y) };
    }

    function enableScroll() {
        window.onscroll = null;
    }

    return (
        <Navbar state={navState} handleChangeState={handleChangeState} handleChangeStateFalse={handleChangeStateFalse} />
    )
}

export default NavbarContainer