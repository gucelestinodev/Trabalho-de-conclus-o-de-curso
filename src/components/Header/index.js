import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Modal,
  View,
  TouchableOpacity,
} from "react-native";

import {
  ContainerHeader,
  ContainerBar,
  ColumnLeft,
  BackText,
  ColumnRight,
  TitleModal,
  TextBackModal,
  ContainerModal,
  ButtonBack,
  TextResetModal,
  ButtonReset,
  SubTitleNames,
  TextNames,
} from "./styles";

import IconBack from "../../assets/IconBack.js";
import MenuLogo from "../../assets/Menu.js";
import Unifal from "../../assets/Unifal.js";
import IconDelete from "../../assets/IconDelete.js";
import Logout from "../../assets/Logout.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderBack = (props) => {
  const { containerBar = true, text, onPress = () => {} } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const limparDados = async () => {
    try {
      await AsyncStorage.clear();
      alert("Dados foram removidos com sucesso!");
    } catch (e) {
      alert("Falha ao remover os dados.");
    }
  };

  return (
    <ContainerHeader>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>
        {containerBar && (
          <ContainerBar>
            <ColumnLeft
              onPress={() => onPress()}
              activeOpacity={0.7}
              hitSlop={{
                top: 50,
                bottom: 50,
                left: 50,
                right: 50,
              }}
            >
              <IconBack />
              <BackText>{text}</BackText>
            </ColumnLeft>
            <ColumnRight
              onPress={openModal}
              activeOpacity={0.7}
              hitSlop={{
                top: 50,
                bottom: 50,
              }}
            >
              <MenuLogo />
            </ColumnRight>
          </ContainerBar>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              backgroundColor: "rgba(0,0,0,.5)",
            }}
          >
            <View
              style={{
                width: "45%",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <ButtonBack onPress={closeModal}>
                <Logout />
              </ButtonBack>
              <ButtonReset onPress={limparDados}>
                <TextResetModal>Limpar App</TextResetModal>
                <IconDelete />
              </ButtonReset>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <SubTitleNames>Desenvolvedores:</SubTitleNames>
                <TextNames>Gustavo C. Lima</TextNames>
                <TextNames>Thiago Oliveira</TextNames>
                <Unifal />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ContainerHeader>
  );
};

export default HeaderBack;
