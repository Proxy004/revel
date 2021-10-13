import { observable, action, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenResponse } from "expo-auth-session";
class AuthStore {
  @observable loggedIn: boolean = false;
  @observable isLoading: boolean = true;
  @observable token: object = {};
  @action changeLoggedIn = (state: boolean) => {
    this.loggedIn = state;
  };
  @action changeLoading = (state: boolean) => {
    this.isLoading = state;
  };
  @action setToken = (token: TokenResponse | null | string) => {
    (async () => {
      try {
        const jsonValue = JSON.stringify(token);
        await AsyncStorage.setItem("@login_token", jsonValue);
      } catch (e) {
        console.log(e);
      }
    })();
  };
  @action checkToken = async (): Promise<any> => {
    (async () => {
      const token = await AsyncStorage.getItem("@login_token");
      if (token != null) {
        try {
          this.token = JSON.parse(token);
        } catch (e) {
          console.log(e);
        }
      } else {
        return null;
      }
    })();
  };
  @action clearToken = () => {
    (async () => {
      await AsyncStorage.removeItem("@login_token");
    })();
  };
  constructor() {
    makeAutoObservable(this);
  }
}

export const authStore = new AuthStore();
