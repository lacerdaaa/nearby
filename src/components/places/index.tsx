import { Text, useWindowDimensions } from 'react-native';
import BottomSheet, { BottomSheetFlatList} from '@gorhom/bottom-sheet'
import { s } from './styles';
import { Place, PlaceProps } from '../place';
import { useRef } from 'react';

type Props = {
    data: PlaceProps[]
}

export default function Places({data}: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef  = useRef<BottomSheet>(null)
  return (
  <BottomSheet>
    <BottomSheetFlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <Place data={item}/>}>
      
    </BottomSheetFlatList>
  </BottomSheet>
 )
}