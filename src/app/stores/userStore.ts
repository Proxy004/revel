import { observable, action, makeAutoObservable } from "mobx";

class AuthStore {
  @observable Name: string = "";

  @action changeName = (name: string) => {
    this.Name = name;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const authStore = new AuthStore();
