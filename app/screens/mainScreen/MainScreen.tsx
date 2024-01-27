import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {DataType, deleteItem} from '../../redux/reducers/reducer';
import Feather from 'react-native-vector-icons/Feather';
import {responsiveFontSize as rf} from 'react-native-responsive-dimensions';
import Colors from '../../config/Theme';
interface IProps {
  navigation: {
    navigate: (path: string) => void;
  };
}
const MainScreen: React.FC<IProps> = ({navigation}) => {
  const {data} = useSelector((state: RootState) => state.AddDataSlice);
  const dispatch = useDispatch<AppDispatch>();
  const handleAdd = () => {
    navigation.navigate('AddData');
  };
  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };
  const renderItem = (item: DataType) => {
    return (
      <View style={styles.item}>
        <View style={styles.leftSection}>
          <Image source={{uri: item.imageUri}} style={styles.image} />
          <View style={styles.textSection}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>
              {new Date(item.id).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Feather name="trash-2" color={Colors.Red_2} size={rf(2.5)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.section_1}>
        <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listSection}>
        {data && (
          <FlatList data={data} renderItem={({item}) => renderItem(item)} />
        )}
      </View>
    </View>
  );
};
export default MainScreen;
