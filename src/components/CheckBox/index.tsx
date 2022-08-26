import { TouchableOpacity } from 'react-native';

import Check from '../../assets/images/check.svg';
import { styles } from './styles';

type Props = {
  marked?: boolean;
  onToggle: () => void;
};

export function CheckBox({ marked = false, onToggle }: Props) {
  return (
    <TouchableOpacity
      style={marked ? styles.containerMarked : styles.containerNotMarked}
      onPress={onToggle}>
      {marked && <Check />}
    </TouchableOpacity>
  );
}
