'use client'
import React, { useState } from 'react';
import UserList from '../Components/UserList/UserList';
import UserForm from '../Components/UserForm/UseForm';
import Layout from '../Components/Layout/Layout';
import Modal from '../Components/Modal/Modal';
import { useUserApi } from '../Hooks/useUserApi';
import './App.module.scss';

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const { users, addUser, updateUser, deleteUser, loading, error } = useUserApi();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleDeleteConfirmation = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      setLoadingDelete(true);
      await deleteUser(selectedUser.id);
      setShowModal(false);
      setLoadingDelete(false);
      setSelectedUser(null);
    }
  };

  return (
    <Layout>
      <h1>User Management System</h1>
      {error && <div className="error-message">{error}</div>}
      <UserForm onAddUser={addUser} onUpdateUser={updateUser} selectedUser={selectedUser} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList 
          users={users} 
          onEditUser={handleEditUser} 
          onDeleteUser={(id) => handleDeleteConfirmation(users.find(user => user.id === id)!)} // Passando o ID corretamente
        />
      )}
      {showModal && selectedUser && (
        <Modal
          title="Confirm Deletion"
          message={`Are you sure you want to delete ${selectedUser.name}?`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowModal(false)}
          loading={loadingDelete}
        />
      )}
    </Layout>
  );
};

export default App;