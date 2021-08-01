import React, { useState } from "react";
import IconBW from "../../assets/IconBW";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Box, FormControl, Input, Stack, Button } from "native-base";
import Google from "../../components/Google/Google";
import Facebook from "../../components/Facebook/Facebook";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <Stack
      space={4}
      px={12}
      mt={10}
      safeArea
      direction="column"
      style={styles.allSignUpForm}
    >
      {/* <KeyboardAvoidingView behavior="position">
        <IconBW fill="black" />

        <FormControl>
          <FormControl.Label>E-Mail</FormControl.Label>
          <Input placeholder="max@revel.com" />
          <FormControl.ErrorMessage>
            Provide a real E-Mail!
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            placeholder="Password"
            type={show ? "text" : "password"}
            InputRightElement={
              <Button
                ml={1}
                roundedLeft={0}
                roundedRight="md"
                onPress={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            }
          />
          <FormControl.ErrorMessage>
            Provide a Password with at least 6 letters and 2 numbers.
          </FormControl.ErrorMessage>
        </FormControl>
      </KeyboardAvoidingView> */}

      <Google />
      <Facebook />
    </Stack>
  );
};
const styles = StyleSheet.create({
  allSignUpForm: { justifyContent: "center" },
});
export default SignUp;
