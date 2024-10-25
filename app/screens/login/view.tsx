import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import useLoginViewModel from "./view.model";

const LoginView: React.FC = () => {
  const { email, password, setEmail, setPassword, isLoading, onSubmit } =
    useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            paddingHorizontal: 12,
          }}
        >
          <View style={{ paddingVertical: 24, width: "100%" }}>
            <View
              style={{ backgroundColor: "red", padding: 12, marginBottom: 12 }}
            >
              <Text>E-Mail</Text>
              <TextInput
                placeholder="email@test.com"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={{ backgroundColor: "red", padding: 12 }}>
              <Text>Password</Text>
              <TextInput
                placeholder="********"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "green",
              marginBottom: 12,
              padding: 12,
              width: "100%",
            }}
          >
            <Button title="login" onPress={onSubmit} disabled={isLoading} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00BFFF",
  },
});

export default LoginView;
