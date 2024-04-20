// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NoteTextArea,
  AddButton,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }

    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNoteText('')
  }

  const renderNotes = () => (
    <NotesList>
      {notesList.map(eachItem => (
        <NoteItem key={eachItem.id} notesDetails={eachItem} />
      ))}
    </NotesList>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <Description>Notes you add will appear here</Description>
    </EmptyNotesViewContainer>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <TitleInput
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
            type="text"
          />
          <NoteTextArea
            placeholder="Take a Note..."
            row="5"
            onChange={onChangeNoteText}
            value={noteText}
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
        {notesList.length === 0 ? renderEmptyNotesView() : renderNotes()}
      </NotesContainer>
    </MainContainer>
  )
}
export default Notes
