import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const HeaderBarHeight = 62;

export const ContainerHeader = styled.View`
  background-color: #fcfcfc;
`;

export const ContainerBar = styled.View`
  height: ${HeaderBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0 || 0}px;
`;

export const ContainerModal = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 30px 0px 0px 10px;
`;

export const ColumnLeft = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 5px;
`;

export const BackText = styled.Text`
  margin-left: 24px;
  font-family: "Roboto-Medium";
  font-size: 17px;
  color: #000;
`;

export const ColumnRight = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 5px;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: "#000000";
  margin: 10px 0px 10px 5px;
  width: 100%;
`;

export const TitleModal = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-top: 20px;
`;

export const TextBackModal = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 22px;
  color: #000;
  margin-right: 50px;
`;

export const TextResetModal = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 22px;
  color: #000;
`;

export const SubTitleNames = styled.Text`
  font-family: "Roboto-Medium";
  font-size: 20px;
  color: #000;
  margin-bottom: 20px;
`;

export const TextNames = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`;

export const ButtonReset = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: "#000000";
  margin-left: 5px;
`;

export const ButtonMod = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: flex-end;
  background-color: "#000000";
`;
