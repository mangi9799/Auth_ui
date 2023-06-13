import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ResetPasswordScreenProps = {
    navigation:StackNavigationProp<RootStackParamList, 'Reset'>;
};

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({navigation}) =>{
    //const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text>Reset Password</Text>
            <Input placeholder="New Password" onChangeText={(text) => setPassword(text)} />
            <Input placeholder="Confirm Password" secureTextEntry onChangeText={(text) => setPassword(text)} />

            <Button title="Reset" onPress={() => alert(`Pressed`)} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default ResetPasswordScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    }
})