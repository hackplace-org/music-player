import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    const sound = new Audio.Sound();
    console.log("created")

    try {
      console.log("loaded")
      // await sound.loadAsync({
      //       uri: "./assets/TalkingToTheMoon.mp3",
      //       shouldPlay: true,
        // });
      let mp3Files = require('./assets/Moon.mp3');
      console.log(mp3Files, require('./assets/Moon.mp3'));
        await sound.loadAsync(mp3Files, {shouldPlay: true});
        await sound.setPositionAsync(0);
        await sound.playAsync();
        console.log("loaded")
        // await sound.playAsync();
        console.log("playing")
        // Your sound is playing!

        // Dont forget to unload the sound from memory
        // when you are done using the Sound object
        // await sound.unloadAsync();
    } catch (error) {
        // An error occurred!
        console.error('AUDIO PLAY: ', error);
    }
  }
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/Moon.mp3')
    );
    // console.log('Sound', sound);
    // setSound(sound);
    await sound.setPositionAsync(0);

    console.log('Playing Sound');
    await sound.playAsync();
  }


  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Play Sound" onPress={playSound} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
