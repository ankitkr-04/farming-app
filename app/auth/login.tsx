import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InputField from '@/components/form/InputField';
import Button from '@/components/Button';
import { color } from '@/assets/config/color';
import useLogin from '@/hooks/useLogin'; 

const Login: React.FC = () => {
    const {
        email,
        password,
        emailError,
        passwordError,
        isLoading,
        handleChangeEmail,
        handleChangePassword,
        handleButtonClick,
        navigateToSignUp,
    } = useLogin();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputField
                label="Email"
                placeholder="Enter your email"
                onChangeText={handleChangeEmail}
                value={email}
                error={emailError}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <InputField
                label="Password"
                placeholder="Enter your password"
                onChangeText={handleChangePassword}
                value={password}
                error={passwordError}
                secureTextEntry
            />
            <Button
                title="Sign In"
                onPress={handleButtonClick}
                isLoading={isLoading}
                buttonStyle={{
                    backgroundColor: color.lightgreen,
                    height: 50,
                    width: 100,
                    borderRadius: 5,
                }}
                textStyle={{
                    color: color.white,
                    fontSize: 16,
                }}
            />
            <Button
                title="Don't have an account? Sign up"
                onPress={navigateToSignUp}
                buttonStyle={{
                    backgroundColor: 'transparent',
                    marginBottom: 20,
                }}
                textStyle={{
                    color: color.lightgreen,
                    fontSize: 14,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Login;
