import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  count: number;
};

export function Status({ title, count }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
