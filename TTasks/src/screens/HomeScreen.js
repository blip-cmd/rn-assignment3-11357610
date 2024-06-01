import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import CategoryItem from '../components/CategoryItem';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
    const categories = [
        { title: 'Exercise', image: require('../../assets/exercise.png') },
        { title: 'Study', image: require('../../assets/study.png') },
        { title: 'Code', image: require('../../assets/code.png') },
        { title: 'Cook', image: require('../../assets/cook.png') },
        { title: 'Read', image: require('../../assets/read.png') },
        { title: 'Write', image: require('../../assets/write.png') },
        { title: 'Meditate', image: require('../../assets/meditate.png') },
        { title: 'Sleep', image: require('../../assets/sleep.png') },
      ];

      const ongoingTasks = [
        { id: '1', title: 'Mobile App Development' },
        { id: '2', title: 'Web Development' },
        { id: '3', title: 'Push Ups' },
        { id: '4', title: 'Read Chapter 3' },
        { id: '5', title: 'Write Blog Post' },
        { id: '6', title: 'Cooking Dinner' },
        { id: '7', title: 'Meditation' },
        { id: '8', title: 'Fixing Bugs' },
        { id: '9', title: 'Yoga Session' },
        { id: '10', title: 'Learning React Native' },
        { id: '11', title: 'Write Unit Tests' },
        { id: '12', title: 'Review Code' },
        { id: '13', title: 'Study Algorithms' },
        { id: '14', title: 'Plan Week' },
        { id: '15', title: 'Exercise' },
      ];

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
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      marginLeft: 16,
    },
    categories: {
      flexDirection: 'row',
      marginBottom: 26,
      paddingLeft: 16,
    },
    buttonContainer: {
      marginTop: 16,
      marginHorizontal: 16,
    },
  });

export default HomeScreen;
