import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header-container'>

       <div>
          <button className="back-button">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </div>

        <div>
          <h1>ToDo List</h1>
        </div>

        <div>
          <button className="options-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>

    </div>
  )
}



