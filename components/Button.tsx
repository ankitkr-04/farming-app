import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: any;
    textStyle?: any;
    isLoading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, buttonStyle, textStyle, isLoading, disabled, ...rest }) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, disabled && styles.disabled]}
            disabled={disabled || isLoading}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={[styles.text, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    disabled: {
        opacity: 0.6,
    },
});

export default Button;
