import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ title, image }) => {
  return (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryText}>{title}</Text>
      <Image source={image} style={styles.categoryImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    width: 186,
    height: 192,
    marginRight: 24,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  categoryImage: {
    width: 145,
    height: 138,
    alignSelf: 'center',
  },
});

export default CategoryItem;
