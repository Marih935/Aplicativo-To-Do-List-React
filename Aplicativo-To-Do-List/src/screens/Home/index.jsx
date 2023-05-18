import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { Task } from '../components/Task';
import React, { useState } from 'react';


export function Home() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(['Tarefa 1']);

    function handleAddTask() {
        if(tasks.includes(task)){
            return Alert.alert('Essa tarefa ainda existe', 'Crie uma tarefa diferente!');
        } else if(task.trim() === ""){
            return Alert.alert('Nada para fazer...', 'Adicione uma tarefa!');
        }
        setTasks(prevState => [...prevState, task]);
        setTask('');
    }

    function handleRemoveTask(tarefa) {
        Alert.alert('Concluir tarefa?', `A tarefa "${tarefa}" será concluída`, [
            {
                text: 'Ainda não'
            },
            {
                text: 'Concluir',
                onPress: () => setTasks(prevState => prevState.filter(it => it !== tarefa))
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                To-do List
            </Text>

            <Text style={styles.h2}>
                Adicone suas tarefas!
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova tarefa"
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
                    <Task
                    tarefa={item}
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