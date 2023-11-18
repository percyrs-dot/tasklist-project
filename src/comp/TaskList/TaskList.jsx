import './TaskList.css'
import {sampleNotes} from '../../assets/notes.json'

export default function TaskList() {
  const notes = sampleNotes;

  return (
    <>

      <div className='tasklist-container'>

        <ol>

        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
        
        </ol>

      </div>

    </>

  )
}
