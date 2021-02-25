import s from "./SidebarHeader.module.scss";

const toggle = (e) => {
    e.target.closest('button').classList.toggle(`${s.headerToggler_active}`)
}

const SidebarHeader = () => {
    return (
        <header className={s.header}>
            <button onClick={toggle} className={`${s.headerToggler} `}><span/></button>
        </header>
    )
}

export default SidebarHeader;