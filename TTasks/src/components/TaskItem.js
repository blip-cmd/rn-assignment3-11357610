import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ title }) => (
  <View style={styles.taskCard}>
    <Text style={styles.taskText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 45,
    paddingHorizontal: 15,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    marginHorizontal: 16,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskItem;
