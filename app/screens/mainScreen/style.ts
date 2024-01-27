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
    paddingHorizontal: rw(4),
    paddingVertical: rh(4),
    backgroundColor: Colors.Background,
  },
  section_1: {
    borderColor: Colors.Black,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  addButton: {
    width: rw(25),
    backgroundColor: Colors.Button,
    height: rh(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: rf(2.5),
    fontWeight: '500',
    color: Colors.Black
  },
  listSection: {
    marginVertical: rh(3),
  },
  item:{
    marginVertical:rh(0.5),
    height:rh(12),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:rw(3),
    backgroundColor:Colors.ListItem,
    borderRadius:6
  },
  leftSection:{
    width:rw(75),
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
  },
  image:{
    width:rw(15),
    height:rh(8),
    resizeMode:"contain"
  },
  textSection:{
    marginLeft:rw(2),
    justifyContent:"space-between",
    width:rw(60),
    flexWrap:"nowrap"
  },
  title:{
    fontSize:rf(2),
    fontWeight:"600",
    color:Colors.Black,
    marginBottom:rh(1.2)
  },
  date:{
    fontSize:rf(1.6),
    fontWeight:"400",
    color:Colors.Black_2
  },
  rightSection:{
    width:rw(8),
    alignItems:"center"
  }
});
export default styles;
