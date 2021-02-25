import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarAccount from "./SidebarAccount/SidebarAccount";

const Sidebar = (props) => {
    return (
        <>
            <SidebarHeader/>
            <SidebarAccount
                name={props.name.userName}/>
        </>
    )
}

export default Sidebar;

