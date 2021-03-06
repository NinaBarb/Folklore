import { View, Pressable, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ShowModalButton(props) {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable onPress={props.onPress} style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <MaterialCommunityIcons name="application-edit" color={'white'} size={26} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063C',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    pressed: {
        opacity: 0.75
    }
});