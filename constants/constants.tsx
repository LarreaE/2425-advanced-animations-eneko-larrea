import { Dimensions } from "react-native";
const {width , height } = Dimensions.get("window");
export const SPACING = 10;
export const ITEM_SIZE = width * 0.75;
export const SPACER_ITEM_SIZE = (width - ITEM_SIZE)/2;