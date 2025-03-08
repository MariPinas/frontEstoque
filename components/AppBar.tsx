import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import UserIcon from '@/assets/svg/userIcon';
import MenuIcon from '@/assets/svg/menuIcon';
import LogoIcon from '@/assets/svg/logoIcon';
import EstoqueIcon from '@/assets/svg/estoqueIcon';
import HomeIcon from '@/assets/svg/homeIcon';
import ProfileIcon from '@/assets/svg/profileIcon';

const { width, height } = Dimensions.get('window');

type Props = {
  pageTitle: string;
  userName: string;
};

const AppBar: React.FC<Props> = ({ pageTitle, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.75)).current;
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Animacao de abertura/fechamento
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -width * 0.65 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.appBar}>
      {/* icone de Menu */}
      <TouchableOpacity onPress={toggleMenu}>
        <MenuIcon style={styles.menuIcon}/>
      </TouchableOpacity>

      <Text style={styles.title}>{pageTitle}</Text>
      <LogoIcon style={styles.logo} />

      {/* Menu Lateral - Drawer*/}
      {isMenuOpen && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
                {/* Perfil e Usuario logado */}
                <View style={styles.menuHeader}>
                  <View style={styles.profileSection}>
                    <ProfileIcon style={styles.profileIcon} />
                    <Text style={styles.userName}>{userName}</Text>
                  </View>
                  <TouchableOpacity onPress={toggleMenu}>
                    <MenuIcon style={styles.menuIcon}/>
                  </TouchableOpacity>
                </View>

                {/* Itens menu*/}
                <TouchableOpacity onPress={() => { router.push('/dashboard'); toggleMenu(); }} style={styles.menuItem}>
                  
                  <Text style={styles.menuItemText}>Dashboard</Text>
                  <HomeIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { router.push('/estoque'); toggleMenu(); }} style={styles.menuItem}>
                  
                  <Text style={styles.menuItemText}>Estoque</Text>
                  <EstoqueIcon />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { router.push('/infoUser'); toggleMenu(); }} style={styles.menuItem}>
                  
                  <Text style={styles.menuItemText}>Conta</Text>
                  <UserIcon />
                </TouchableOpacity>

               

              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
  },
  menuIcon:{
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  logo: {
    width: 40,
    height: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width * 0.65,
    height: height,
    backgroundColor: '#2C3E50',
    padding: 20,
    zIndex: 2,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 80, 
  },
  profileSection: {
    alignItems: 'center',
  },
  profileIcon: {
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFDFB',
  },
  menuItem: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:10 ,
    alignItems: 'flex-end',
  },
  menuItemText: {
    fontSize: 18,
    color: '#FFFDFB',
  },
});

export default AppBar;
