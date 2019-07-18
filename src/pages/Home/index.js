import React from 'react';
import { StatusBar, StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
  const title = useSelector(state => state.home.title);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.span}>você baixou o template simples</Text>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://pixter.com.br/wp-content/uploads/2018/06/logo-retina-white.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#000',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 10,
    right: 30,
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 30,

    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
  span: {
    fontSize: 12,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
  },
});
export default Home;
