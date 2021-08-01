import { observable, action, makeAutoObservable } from "mobx";

class AuthStore {
  @observable loggedIn: boolean = false;
  @observable isLoading: boolean = false;
  @action changeLoggedIn = (state: boolean) => {
    this.loggedIn = state;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const authStore = new AuthStore();
