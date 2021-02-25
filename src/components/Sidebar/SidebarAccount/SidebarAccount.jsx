import userImage from  '../../../assets/img/userImage.jpg';

const SidebarAccount = (props) => {
    return (
        <section>
            <img src={userImage} alt={props.name}/>
            <p>{props.name}</p>
        </section>
    )
}

export default SidebarAccount;