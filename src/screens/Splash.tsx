import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import * as SplashScreen from "expo-splash-screen";

type Props = {
  onComplete: (status: boolean) => void;
};

const Splash: React.FC<Props> = ({ onComplete }) => {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) SplashScreen.hideAsync();
      if (status.didJustFinish) onComplete(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require("../../assets/videos/splash.mp4")}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
      />
    </View>
  );
};

export default Splash;
