import React from 'react';
import { NavigationType } from '../config/navigation';
import NavBarStyled from './NavBarStyled';

interface NavbarProps {
  navigation: NavigationType[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return <NavBarStyled></NavBarStyled>;
};

export default Navbar;
