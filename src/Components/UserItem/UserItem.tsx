import React from 'react';
import styles from './UserItem.module.scss'; // Corrigido para usar módulos SCSS

interface UserItemProps {
  user: any;
  onDeleteUser: (id: number) => void;
  onEditUser: (user: any) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onDeleteUser, onEditUser }) => {
  return (
    <div className={styles.userItem}> {/* Usando classe do módulo */}
      <h3 className={styles.name}>{user.name}</h3> {/* Usando classe do módulo */}
      <p className={styles.email}>Email: {user.email}</p> {/* Usando classe do módulo */}
      <div className={styles.actions}> {/* Usando classe do módulo */}
        <button className={styles.editButton} onClick={() => onEditUser(user)}>Edit</button> {/* Usando classe do módulo */}
        <button className={styles.deleteButton} onClick={() => onDeleteUser(user.id)}>Delete</button> {/* Usando classe do módulo */}
      </div>
    </div>
  );
};

export default UserItem;
