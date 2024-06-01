import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.subtitle}>14 tasks today</Text>
        <View style={styles.userImageContainer}>
          <Image source={require('../../assets/person.png')} style={styles.userImage} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <Icons name="sliders-h" size={24} color="#fff" style={styles.filterIcon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingBottom: 50,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  userImageContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 25,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    height: 49,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 14,
    height: 48,
    width: 50,
    paddingTop: 12,
    paddingLeft: 13,
  },
});

export default HomeScreen;
