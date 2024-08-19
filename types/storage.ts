import { PersistentJson } from "../utils/persistent-json.js";
import { Reserved } from "./reserve.js";

export type ReservedStorage = Reserved[];

export interface Storage {
  reserved: PersistentJson<ReservedStorage>;
}
