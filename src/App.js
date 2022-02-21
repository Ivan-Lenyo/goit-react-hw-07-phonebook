import s from './App.module.css';
import ContactList from './components/ContactList';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactsForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
