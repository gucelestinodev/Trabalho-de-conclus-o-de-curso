import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { ButtonClose, Title } from "./styles";

import IconError from "../../../assets/IconError";
import Close from "../../../assets/Close";

const ModalError = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <ButtonClose onPress={onClose}>
            <Close />
          </ButtonClose>
          <Title>Errou</Title>
          <View style={styles.img}>
            <IconError />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Isso irá ajudar a destacar o modal
  },
  modal: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 230,
    margin: 20,
    borderRadius: 10,
  },
  button: {
    marginBottom: 50,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalError;
