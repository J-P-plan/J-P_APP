import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  SafeAreaView,
} from "react-native";

const DismissKeyboardHOC = (Comp: any) => {
  return ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    tw: string;
  }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};

export const DismissKeyboardView = DismissKeyboardHOC(View);
export const DismissKeyboardSafeAreaView = DismissKeyboardHOC(SafeAreaView);
