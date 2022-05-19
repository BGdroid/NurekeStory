import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dimensions, View, Platform, Text } from "react-native";

type Props = {
  data: string,
};

export const NStory = (props: Props) => {
  const { data } = props;

  const [dataState, setDataState] = useState(data);

  return (
    <Fragment>
      <View>
        <Text>{dataState}</Text>
      </View>
    </Fragment>
  );
};
export default NStory;

NStory.defaultProps = {
  showAvatarText: true,
};
