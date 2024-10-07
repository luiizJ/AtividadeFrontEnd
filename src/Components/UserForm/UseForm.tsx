import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styles from './UseForm.module.scss'; // Corrigido para o nome correto do arquivo

interface UserFormProps {
  onAddUser: (user: any) => void;
  onUpdateUser: (user: any) => void;
  selectedUser: any;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const UserForm: React.FC<UserFormProps> = ({ onAddUser, onUpdateUser, selectedUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await schema.validate({ name, email }, { abortEarly: false });
      setErrors({});
      const newUser = { name, email };
      if (selectedUser) {
        onUpdateUser({ ...selectedUser, ...newUser });
      } else {
        onAddUser(newUser);
      }
      setName('');
      setEmail('');
    } catch (err: any) {
      const newErrors: { [key: string]: string } = {};
      err.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
        className={styles.input} // Adicionado a classe do módulo
      />
      {errors.name && <div className={styles.error}>{errors.name}</div>} {/* Classe de erro */}
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        className={styles.input} // Adicionado a classe do módulo
      />
      {errors.email && <div className={styles.error}>{errors.email}</div>} {/* Classe de erro */}
      <button type="submit" className={styles.button}>{selectedUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
