import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.scss'; // Corrigido para usar módulos SCSS

interface UserListProps {
  users: any[];
  onDeleteUser: (id: number) => void;
  onEditUser: (user: any) => void;
  
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div className={styles.userList}> {/* Usando classe do módulo */}
      {users.map(user => (
        <UserItem 
          key={user.id} 
          user={user} 
          onDeleteUser={onDeleteUser} 
          onEditUser={onEditUser} 
        />
      ))}
    </div>
  );
};

export default UserList;
