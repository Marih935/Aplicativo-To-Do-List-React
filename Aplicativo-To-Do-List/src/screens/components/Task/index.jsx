import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export function Task({tarefa, remove}) {
    return(
    <View style={styles.containerP}>
        <Text style={styles.tarefa}>
            {tarefa}
        </Text>

        <TouchableOpacity style={styles.buttonRm} onPress={remove}>
            <Text style={styles.buttonText}>
                ✓
            </Text>
        </TouchableOpacity>
    </View>
    );
}