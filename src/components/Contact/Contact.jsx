import { VscAccount, VscCallOutgoing } from 'react-icons/vsc';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <div>
        <p>
          <VscAccount /> {name}
        </p>
        <p>
          <VscCallOutgoing /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
