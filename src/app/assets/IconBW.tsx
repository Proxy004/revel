import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const IconBW = (props: SvgProps) => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="50%" viewBox="0 0 1000 500" {...props}>
        <G data-name="Gruppe 11">
          <G data-name="Gruppe 4">
            <G data-name="Gruppe 3">
              <Path
                data-name="Pfad 4"
                d="M152.456 313.939l-49.183-70.044c-4.561.325-9.448.651-14.335.651h-56.36v69.392H0V85.9h88.939c59.293 0 95.129 29.961 95.129 79.48 0 35.185-18.244 60.6-50.182 72l54.091 76.559zm-.966-148.559c0-32.578-21.828-51.147-63.528-51.147H32.578v102.621h55.383c41.701 0 63.529-18.893 63.529-51.474z"
              />
              <Path
                data-name="Pfad 5"
                d="M408.546 285.595v28.344h-165.51V85.9h160.949v28.333H275.614v70.043h114.359v27.691H275.614v73.628z"
              />
              <Path
                data-name="Pfad 6"
                d="M862.994 285.595v28.344h-165.5V85.9h160.939v28.333H730.074v70.043h114.35v27.691h-114.35v73.628z"
              />
              <Path
                data-name="Pfad 7"
                d="M921.96 85.9h32.578v199.695h123.473v28.344H921.96z"
              />
            </G>
          </G>
          <G data-name="Gruppe 2">
            <Path
              data-name="Rechteck 10"
              d="M541.891 308.79h15.191v130.209h-15.191z"
            />
            <Path
              data-name="Pfad 2"
              d="M551.439 122.805h-78.991l39.493 86.59 39.5 86.591 39.5-86.591 39.5-86.59zm-37.653 40.471a10.633 10.633 0 1113.453-6.722 10.631 10.631 0 01-13.453 6.722zm26.649 63.955a12.935 12.935 0 1112.937-12.931 12.931 12.931 0 01-12.937 12.931zm38.285-47.349a9.548 9.548 0 119.551-9.552 9.553 9.553 0 01-9.551 9.552z"
            />
            <G data-name="Gruppe 1">
              <Path
                data-name="Pfad 1"
                d="M662.117 86.67l-96.962 218.955a15.458 15.458 0 01-14.128 9.188h-3.216a16.18 16.18 0 01-14.784-9.621L436.254 86.67h26.074l87.346 198.159 88-198.159z"
              />
            </G>
            <Path
              data-name="Rechteck 11"
              d="M604.995 41.875l11.06 2.238-19.67 97.209-11.061-2.238z"
            />
            <Path
              data-name="Rechteck 12"
              d="M677.625 0l5.643 9.773-72.572 41.9-5.642-9.774z"
            />
            <Path
              data-name="Pfad 3"
              d="M544.003 437.093a25.611 25.611 0 019.944 0l26.132 7.706 26.139 7.705c2.209.65-.55 1.465-4.974 1.465H496.7c-4.418 0-7.178-.815-4.969-1.465l26.133-7.705z"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default IconBW;
