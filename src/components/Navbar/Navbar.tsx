import style from "./Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faGear , faSchool , faPerson , faPersonWalkingWithCane , faCat } from "@fortawesome/free-solid-svg-icons"
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons"

export default function Navbar(){

    return(
        <div className={style.container}>
            <ul>
                <li><FontAwesomeIcon icon={faSpaceAwesome} /></li>
                <li><FontAwesomeIcon icon={faSchool} /></li>
                <li><FontAwesomeIcon icon={faPerson} /></li>
                <li><FontAwesomeIcon icon={faPersonWalkingWithCane} /></li>
                <li><FontAwesomeIcon icon={faCat} /></li>

            </ul>

            <div className={style.footer}>
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </div>

        </div>
    )
}