// app/resetpassword/screen15.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen15 = ({ navigation }) => {
    const handleVerify = () => {
        navigation.navigate('Screen16');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>OTP Code Verification</Text>
            <Text style={styles.subHeader}>Code has been sent to +234807****43</Text>

            <View style={styles.otpContainer}>
                {/* Display OTP digits as blocks */}
                {[7, 4, 2, 6].map((digit, index) => (
                    <View key={index} style={styles.otpBlock}>
                        <Text style={styles.otpText}>{digit}</Text>
                    </View>
                ))}
            </View>

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
    otpContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    otpBlock: {
        width: 50,
        height: 50,
        backgroundColor: '#f2f4ff',
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpText: {
        fontSize: 18,
        fontWeight: 'bold',
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

export default Screen15;
