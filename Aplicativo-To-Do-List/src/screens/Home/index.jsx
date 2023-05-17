import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Task } from 'components/Task';
import React, { useState } from 'react';


export function Home() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(['Tarefa 1']);

    function handleAddTask() {
        if(tasks.includes(task)){
            return Alert.alert('Tarefa já cadastrada', 'Crie uma tarefa diferente!');
        } else if(task.trim() === ""){
            return Alert.alert('Campo vazio', 'Digite uma tarefa!');
        }
        setTask(prevState => [...prevState, task]);
        setTask('');
    }

    function handleRemoveTask(item) {
        Alert.alert('Deletar Task', 'Tem certeza que deseja remover a tarefa ${item}?', [
            {
                text: 'Cancelar'
            },
            {
                text: 'Confirmar',
                onPress: () => setTask(prevState => prevState.filter(task => task !== item))
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Evento
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 11 de maio de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Título da tarefa"
                    placeholderTextColor="#6B6B6B"
                    value={task}
                    onChangeText={setTask}
                />

                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                    name={item}
                    remove={()=>handleRemoveTask(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nada a fazer... Adicione uma tarefa!
                    </Text>
                )}
            />
        </View>
    );
}