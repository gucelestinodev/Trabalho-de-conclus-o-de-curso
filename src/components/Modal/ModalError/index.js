import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { ButtonClose, Title, SubTitle,TextButton } from "./styles";

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
          <View style={styles.img}>
            <IconError />
          </View>
          <Title>Atenção!</Title>
          <SubTitle>Tente novamente.</SubTitle>
          <ButtonClose onPress={onClose}>
            <TextButton>OK</TextButton>
          </ButtonClose>
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
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
