import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {selectData} from '../../redux/reducers/reducer';
interface IProps {
  navigation: {
    navigate: (path: string) => void;
  };
}
const AddData: React.FC<IProps> = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [imageUri, setImageUri] = useState('');
  const [btnVisible,setBtnVisible]=useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const camera = async () => {
    const options: any = {
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true,
      saveToPhotos: true,
    };
    try{
        launchCamera(options, (response: any) => {
          setImageUri(response?.assets[0]?.uri);
        });
        setModalOpen(false);
    }catch(error){
        console.log("image picker error for camera -->",error)
    }
  };
  const gallery = () => {
    const options: any = {
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true,
      saveToPhotos: true,
    };
    try {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled image picker');
        } else {
            const url = response?.assets && response?.assets[0]?.uri;
            url && setImageUri(url);
        }
      });
    } catch (error) {
      console.log('image picker error for gallery ==>>', error);
    }
    setModalOpen(false);
  };
  const handleSelectImage = () => {
    setModalOpen(prev => !prev);
  };
  const cancelButton = () => {
    setModalOpen(prev => !prev);
  };
  const handleTitleText = (text: string) => {
    setInputValue(text);
  };
  const handleSubmit = () => {
    if(imageUri!=="" && inputValue!==''){
        setBtnVisible(true);
        const data = {
            id: Date.now(),
            title: inputValue,
            imageUri,
          };
          dispatch(selectData(data));
          navigation.navigate('Home');
    }else{
        setBtnVisible(false)
    }
  };
  const handleModal = () => {
    return (
      <Modal transparent={true} animationType="slide" visible={modalOpen}>
        <Pressable onPress={() => setModalOpen(false)} style={styles.modal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={gallery} style={[styles.button]}>
              <Text style={styles.text2}>Select From gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={camera} style={styles.button}>
              <Text style={styles.text2}>Select Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelButton}
              style={styles.cancelButton}>
              <Text style={styles.cancelText}>cancel</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonSection}>
        <TouchableOpacity onPress={handleSelectImage} style={styles.imageBtn}>
          <Text style={styles.selectImageText}>Select Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageSection}>
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
      <View style={styles.textFieldSection}>
        <View style={styles.textLabel}>
          <Text style={styles.titleText}>Enter Title</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleTitleText(text)}
          value={inputValue}
        />
      </View>
      <View style={styles.submitBtnSection}>
        <TouchableOpacity disabled={btnVisible}
        onPress={handleSubmit} 
        style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>{modalOpen && handleModal()}</View>
    </View>
  );
};

export default AddData;
