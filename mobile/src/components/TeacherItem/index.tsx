import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteicon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/mateusfg7.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Mateus Felipe</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Apaixonado por Blockchain!
        {"\n"}
        {"\n"}
        Ama espalhar a sementinha do libertarianismo e ensinar a maravilha da
        tecnologia descentralizada basiada em pura matemática.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Proço/Hora {"   "}
          <Text style={styles.priceValue}>BTC 0.015</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
