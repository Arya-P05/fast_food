import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Sign In" onPress={() => router.push("/SignIn")} />
    </View>
  );
};

export default SignUp;
