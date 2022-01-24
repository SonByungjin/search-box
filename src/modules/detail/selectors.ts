import { RootState } from "modules";
import { DetailItemInterface } from "./reducer";

export const selectDetailResult = (state: RootState): DetailItemInterface =>
  state.detail.result;
