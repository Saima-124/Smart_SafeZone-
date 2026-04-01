import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  // ----- Common container -----
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  // ----- Header -----
  headerBar: {
    height: 60,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#4CAF50",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  // ----- Onboarding content -----
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  feature: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
    textAlign: "center",
  },
  desc: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },

  // ----- Buttons -----
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  // ----- Pagination dots -----
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  // ----- Login/Signup extra -----
  subText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 15,
  },
  googleText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  linkText: {
    fontSize: 14,
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 15,
  },
  linkSmall: {
    fontSize: 13,
    color: "#4CAF50",
    textAlign: "right",
    marginTop: 8,
  },
  userTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  userTypeSelected: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4CAF50",
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    padding: 10,
  },
  userTypeUnselected: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  // ----- Password field with eye toggle -----
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
});
