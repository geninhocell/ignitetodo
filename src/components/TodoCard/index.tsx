import { Text, TouchableOpacity, View } from 'react-native';

import Trash from '../../assets/images/trash.svg';
import { TodoProps } from '../../screens/Home';
import { CheckBox } from '../CheckBox';
import { styles } from './styles';

type Props = {
  data: TodoProps;
  onToggle: () => void;
  onRemove: () => void;
};

export function TodoCard({ data, onToggle, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <CheckBox marked={data.completed} onToggle={onToggle} />

      <Text style={styles.title} numberOfLines={2}>
        {data.title}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
