import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import useLoginViewModel from "./view.model";

const LoginView: React.FC = () => {
  const { email, password, setEmail, setPassword, isLoading, onSubmit } =
    useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>E-Mail</Text>
        <TextInput
          placeholder="email@test.com"
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="login" onPress={onSubmit} disabled={isLoading} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default LoginView;
