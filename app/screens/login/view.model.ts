import { useState } from "react";
import { login } from "../../../components/repositories/auth.repository";
import { Alert } from "react-native";

const useLoginViewModel = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    console.log({ email, password });

    try {
      setIsLoading(true);
      const response = await login({ email, password });
      console.log(response);

      //TODO: navigate to home
    } catch (error) {
      Alert.alert("Oops!", "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setPassword,
    setEmail,
    isLoading,
    onSubmit,
  };
};

export default useLoginViewModel;
