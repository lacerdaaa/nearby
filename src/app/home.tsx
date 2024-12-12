import { View, Text, Alert } from 'react-native';

import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import {Categories, CategoriesProps }from '@/components/categories';

export default function Home() {

  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Erro:', 'Error in fetch categories')
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

 return (
   <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Categories data={categories}/>
    
   </View>
  );
}

