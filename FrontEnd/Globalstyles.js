import { StyleSheet } from "react-native";

const globalstyles = StyleSheet.create({

    // General styles
    main: {
        height: "100%",
        width: "100%",
        backgroundColor: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    card: {
        backgroundColor: "#fff",
        width: 350,
        borderStyle: "solid",
        borderColor: "transparent",
        borderRadius: 8,
        shadowColor: "#cecece",  
        elevation: 13,
        padding: 13,
        marginBottom: 10,
    },

    image: {
        width: "100%",
        height: "auto",
    },

    input: {
        height: 48,
    },

    textInput: {
        fontFamily: "Inter_300Light",
        fontSize: 17,
        color: "#636262",
    },

    lighterGrayText: {
        fontFamily: "Inter_300Light",
        fontSize: 15,
        color: "#636262",
        paddingVertical: 5,
    },

    homeHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },

    homeText: {
        fontSize: 22,
        fontFamily: "Inter_500Medium",
        paddingVertical: 5,
    },

    seeAllText: {
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#000",
        borderRadius: 10,
    },

    spinner: {
        marginTop: "100%",
    },

    // Lists icon styles
    listsIcons: {
        backgroundColor: "#fbd99d",
        borderRadius: 10,
        width: 55,
        height: 55,
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