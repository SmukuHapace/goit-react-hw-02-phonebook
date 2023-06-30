import PropTypes from 'prop-types';
import './ContactList.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className="contacts-content">
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
