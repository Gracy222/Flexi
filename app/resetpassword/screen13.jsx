// app/resetpassword/screen13.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen13 = ({ navigation }) => {
    const handleContinue = () => {
        navigation.navigate('Screen14');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Forgot Password</Text>
            <Text style={styles.subHeader}>Select which contact details should we use to reset your password</Text>

            <TouchableOpacity style={styles.option} onPress={handleContinue}>
                <Text style={styles.optionText}>via SMS: +2348076434943</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleContinue}>
                <Text style={styles.optionText}>via Email: infopamtech@gmail.com</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    option: {
        width: '90%',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
    },
    continueButton: {
        width: '90%',
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Screen13;
