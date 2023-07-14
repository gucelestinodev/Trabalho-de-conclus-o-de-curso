import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const ContainerIteins = styled.View`
  align-items: center;  
`;

export const Separador = styled.View`
  margin-top: 200px;
`;

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  border: 2px #000000 solid;
  width: 130px;
  padding: 5px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #282828; 
  font-family: 'Roboto-Medium';
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  color: #282828;
  font-family: 'Roboto-Regular';
  padding-bottom: 20px;
`;

export const TextButton = styled.Text`
  font-size: 30px;
  color: #000000;
  font-family: 'Roboto-Medium';
`;
