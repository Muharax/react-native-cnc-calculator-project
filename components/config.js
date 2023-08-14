import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}