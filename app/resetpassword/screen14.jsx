// app/resetpassword/screen14.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Screen14 = ({ navigation }) => {
    const [otp, setOtp] = useState('');

    const handleVerify = () => {
        navigation.navigate('Screen15');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>OTP Code Verification</Text>
            <Text style={styles.subHeader}>Code has been sent to +234807****43</Text>

            <TextInput
                style={styles.otpInput}
                maxLength={4}
                keyboardType="numeric"
                placeholder="Enter OTP"
                onChangeText={setOtp}
                value={otp}
            />

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Verify</Text>
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
    otpInput: {
        width: '50%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
    },
    verifyButton: {
        width: '50%',
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Screen14;
