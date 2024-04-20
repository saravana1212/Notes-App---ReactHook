// Write your code here
import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, noteText} = notesDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </ListItem>
  )
}

export default NoteItem
