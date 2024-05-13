import { AiFillPhone } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <AiFillPhone />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
export default Contact;
