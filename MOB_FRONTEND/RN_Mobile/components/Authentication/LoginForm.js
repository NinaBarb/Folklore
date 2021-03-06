import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import EndPoints from "../../constants/endPoints";
import { useNavigation } from '@react-navigation/native';

import Button from '../ui/Button';
import Input from './Input';

export default function AuthForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    // const {
    //     email: emailIsInvalid,
    //     password: passwordIsInvalid
    // } = credentialsInvalid;


    function loginUser(credentials) {
        fetch(EndPoints.loginEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        })
            .then(async (response) => {
                let message = await response.json()
                if (!response.ok) throw new Error(message.message);
                else return message.message;
            })
            .then(async (data) => {
                props.logInUser()
                props.setMessage(data);
                props.onToggleSnackBar()
                navigation.navigate("Home")
            })
            .catch(error => {
                props.setMessage(error.message);
                props.onToggleSnackBar()
                console.log(error);
            })
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEmail(enteredValue);
                break;
            case 'password':
                setPassword(enteredValue);
                break;
        }
    }

    function submitHandler() {
        loginUser({
            email,
            password
        });
    }

    return (
        <View style={styles.form}>
            <View>
                <Input
                    label="Email Address"
                    onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                    value={email}
                    keyboardType="email-address"
                />

                <Input
                    label="Password"
                    onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                    secure
                    value={password}
                />

                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        Login
                    </Button>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 12,
    },
});