import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/SignUp")} />
    </View>
  );
};

export default SignIn;
