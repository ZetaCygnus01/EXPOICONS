import {
    FiHome,
    FiUser,
    FiSettings,
    FiHeart,
    FiSearch,
    FiMail,
    FiStar,
    FiCamera,
    FiChrome
} from "react-icons/fi";

function Inicio() {
    return (
        <div>
            <h1>Mi proyecto React</h1>

            <h2>Lista de iconos</h2>

            <div>
                <FiHome />
                <hr />
                <FiUser /> <hr />
                <FiSettings /> <hr />
                <FiHeart /> <hr />
                <FiSearch /> <hr />
                <FiMail /> <hr />
                <FiStar /> <hr />
                <FiCamera /> <hr />
                <FiChrome />
            </div>  
        </div>
    );
}

export default Inicio;