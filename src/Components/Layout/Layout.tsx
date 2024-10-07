import React from 'react';
import styles from './Layout.module.scss'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>; // Usando a classe do módulo
};

export default Layout;
