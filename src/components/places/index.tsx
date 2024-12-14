import { useRef } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import BottomSheet, { BottomSheetFlatList} from '@gorhom/bottom-sheet'
import { Place, PlaceProps } from '../place';

import { s } from './styles';

type Props = {
    data: PlaceProps[]
}

export default function Places({data}: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef  = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimensions.height - 300
  }

  return (
  <BottomSheet
  ref={bottomSheetRef}
  snapPoints={[snapPoints.min, snapPoints.max]}
  handleIndicatorStyle={s.indicator}
  backgroundStyle={s.container}
  enableOverDrag={false}>
    <BottomSheetFlatList
    contentContainerStyle={s.content}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Place data={item}
    />}
    ListHeaderComponent={() => (
      <Text style={s.title}>Explore locais perto de você!</Text>
    )}
    showsVerticalScrollIndicator={false}>
      
    </BottomSheetFlatList>
  </BottomSheet>
 )
}