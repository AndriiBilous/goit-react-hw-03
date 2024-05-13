import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.container}>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <Contact contact={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
