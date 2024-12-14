import { View, Text, Alert } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import Places from "@/components/places";

type MarketProps = PlaceProps & {}

export default function Home() {

  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState<string>("");
  const [markets, setMarkets] = useState<MarketProps[]>([])


  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro:", "Error in fetch categories");
    }
  }

  async function fetchMarket() {
    try {
      if(!category) {
        return 
      }
      const { data } = await api.get('/markets/category/' + category);
      setMarkets(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      Alert.alert("ERRO DE FETCH", " Was not possible to fetch market data");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarket();
  }, [category]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#CCC' }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <Places data={markets}/>
    </View>
  );
}
