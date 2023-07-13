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

const HeaderBack = (props) => {
  const { containerBar = true, text, onPress = () => {} } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "50%",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <ButtonBack onPress={closeModal}>
                  <TextBackModal>Sair</TextBackModal>
                  <Logout />
                </ButtonBack>
                <ButtonReset>
                  <TextResetModal>Limpar</TextResetModal>
                  <IconDelete />
                </ButtonReset>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
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
