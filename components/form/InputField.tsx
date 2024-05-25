import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
    label: string;
    containerStyle?: any;
    inputStyle?: any;
    error?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({ label, containerStyle, inputStyle, error, ...rest }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, inputStyle, focused && styles.focusedInput, error && styles.errorInput]}
                placeholderTextColor="#999"
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    focusedInput: {
        borderColor: '#007bff', 
    },
    errorInput: {
        borderColor: '#dc3545',
    },
    errorText: {
        color: '#dc3545',
        fontSize: 12,
        marginTop: 5,
    },
});

export default InputField;
