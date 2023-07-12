import { shuffle } from "lodash";
import React, { useState } from "react";
import { Dimensions, PanResponder, StyleSheet, View } from "react-native";
import Svg, { Circle, Line, Text } from "react-native-svg";
import { Container, ContainerButton, TextButton } from "./styles";
import HeaderBack from "../../../../../components/Header";

const window = Dimensions.get("window");

const Ex6Md2 = ({navigation}) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);

  const dots = shuffle([
    { x: 50, y: window.height / 5, color: "#000000", letter: "A" },
    { x: 50, y: (window.height / 5) * 2, color: "#000000", letter: "B" },
    { x: 50, y: (window.height / 5) * 3, color: "#000000", letter: "C" },
    { x: 50, y: (window.height / 5) * 4, color: "#000000", letter: "D" },
    {
      x: window.width - 50,
      y: (window.height / 5) * 3,
      color: "#000000",
      letter: "a",
    },
    {
      x: window.width - 50,
      y: (window.height / 5) * 2,
      color: "#000000",
      letter: "b",
    },
    {
      x: window.width - 50,
     y: window.height / 5,
      color: "#000000",
      letter: "c",
    },
    {
      x: window.width - 50,
      y: (window.height / 5) * 4,
      color: "#000000",
      letter: "d",
    },
  ]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      dots.forEach((dot, index) => {
        if (
          Math.abs(gestureState.x0 - dot.x) < 30 &&
          Math.abs(gestureState.y0 - dot.y) < 30 &&
          dot.x === 50
        ) {
          setCurrentLine({
            start: { x: dot.x, y: dot.y, color: dot.color },
            end: { x: dot.x, y: dot.y, color: dot.color },
          });
        }
      });
    },
    onPanResponderMove: (evt, gestureState) => {
      if (currentLine) {
        setCurrentLine({
          ...currentLine,
          end: { x: gestureState.moveX, y: gestureState.moveY },
        });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (currentLine) {
        const radius = 20; // Define o raio máximo permitido

        dots.forEach((dot, index) => {
          const dotX = dot.x;
          const dotY = dot.y;

          const distance = Math.sqrt(
            (currentLine.end.x - dotX) ** 2 + (currentLine.end.y - dotY) ** 2
          );

          if (distance <= radius) {
            setLines([...lines, currentLine]);
          }
        });
      }
      if (currentLine && !lines.includes(currentLine)) {
        setCurrentLine(null);
      }
    },
  });

  console.log(currentLine);

  return (
    <>
      <HeaderBack
        text="Exercicio 5"
        onPress={() => navigation.navigate("Modules2")}
      />
      <View {...panResponder.panHandlers} style={styles.container}>
        <Svg
          height="100%"
          width="100%"
          viewBox={`0 0 ${window.width} ${window.height}`}
        >
          {dots.map((dot, index) => (
            <Svg key={index}>
              <Circle cx={dot.x} cy={dot.y} r="20" fill={dot.color} />
              <Text
                style={{ fontSize: 40, textAlign: "center" }}
                x={dot.x}
                y={dot.y + 15}
                fill="white"
                textAnchor="middle"
              >
                {dot.letter}
              </Text>
            </Svg>
          ))}
          {lines.map((line, index) => (
            <Line
              key={index}
              x1={line.start.x}
              y1={line.start.y}
              x2={line.end.x}
              y2={line.end.y}
              stroke={line.start.color}
              strokeWidth="5"
            />
          ))}
          {currentLine && (
            <Line
              x1={currentLine.start.x}
              y1={currentLine.start.y}
              x2={currentLine.end.x}
              y2={currentLine.end.y}
              stroke={currentLine.start.color}
              strokeWidth="2"
            />
          )}
        </Svg>
        <Container>
          <ContainerButton onPress={() => {}}>
            <TextButton>Enviar</TextButton>
          </ContainerButton>
        </Container>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Ex6Md2;
