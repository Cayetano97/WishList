import { StyleSheet } from "react-native";



const globalstyles = StyleSheet.create({

    input: {
        backgroundColor: "#fff",
        width: 350,
        height: 48,
        borderStyle: "solid",
        borderColor: "transparent",
        borderRadius: 8,
        shadowColor: "#cecece",  
        elevation: 13,
        padding: 13,
        marginBottom: 10,
        color: "#636262", 
        fontSize: 17,
        fontFamily: "Inter_300Light",
    },

    // Button styles

    button: {
        padding: 8,
        borderRadius: 8,
        width: 350,
        height: 48,
        marginBottom: 10,
        borderColor: "transparent",
        borderWidth: 3,
    },

    purpleMainButton: {
        backgroundColor: "#8A3EB9",
    },

    blackMainButton: {
        backgroundColor: "#000",
    },

    purpleButton: {
        backgroundColor: "#fff",
        borderColor: "#8A3EB9",
    },

    blackButton: {
        backgroundColor: "#fff",
        borderColor: "#000",
    },

    grayButton: {
        backgroundColor: "#C5C5C5",
        borderColor: "#000",
    },

    placeholderButton: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "Inter_600SemiBold",
    },

    placeholderMainButton: {
        color: "#fff",
    },

    // Delete Button Styles

    deleteButton: {
        backgroundColor: "#FF6262",
    },

    placeholderDeleteButton: {
        color: "#fff",
        textAlign: "left",
        marginLeft: 50,
    },
});

export default globalstyles;