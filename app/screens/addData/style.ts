import {StyleSheet} from 'react-native';
import Colors from '../../config/Theme';
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingVertical: rh(4),
    paddingHorizontal: rw(3),
  },
  buttonSection: {
    alignItems: 'center',
    height: rh(10),
  },
  imageBtn: {
    width: rw(85),
    height: rh(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Colors.ImageButton,
  },
  imageSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: rw(24),
    height: rh(12),
    resizeMode: 'cover',
    borderRadius: 6,
  },
  selectImageText: {
    fontSize: rf(2.3),
    fontWeight: '500',
    color: Colors.White_2,
  },
  textFieldSection: {
    paddingHorizontal: rw(4),
    marginVertical: rh(5),
  },
  textLabel: {
    marginVertical: rh(1),
  },
  titleText: {
    fontSize: rf(2),
    fontWeight: '600',
    color: Colors.White_2,
  },
  textInput: {
    borderWidth: 0.3,
    width: rw(85),
    height: rh(6),
    borderColor: Colors.borderColor,
    color: Colors.white,
    fontSize: rf(2),
    paddingHorizontal: rw(3),
    borderRadius: 5,
  },
  submitBtnSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: rw(5),
  },
  submitBtn: {
    width: rw(30),
    justifyContent: 'center',
    alignItems: 'center',
    height: rh(6),
    backgroundColor: Colors.Button,
    borderRadius: 8,
  },
  submitText: {
    fontSize: rf(2),
    fontWeight: '500',
    color: Colors.Black,
  },
  modal: {
    flex: 1,
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    bottom: rh(0),
    width: rw(100),
    backgroundColor: Colors.white,
    height: rh(20),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: rh(2.5),
    paddingHorizontal: rw(4),
    alignItems: 'center',
  },
  button: {
    width: rw(85),
    height: rh(5),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: rh(1.2),
  },
  cancelButton: {
    marginVertical: rh(1),
    width: rw(85),
    height: rh(5),
    borderTopWidth: 0.2,
    borderTopColor: Colors.borderColor_2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: rh(1),
  },
  text2: {
    fontSize: rf(2),
    fontWeight: '500',
    color: Colors.Black,
  },
  cancelText: {
    fontSize: rf(2),
    fontWeight: '500',
    color: Colors.Black_2,
  },
});
export default styles;
