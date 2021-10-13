import { observable, action, makeAutoObservable } from "mobx";

class UserStore {
  @observable Name: string = "";
  @observable Mail: string = "";

  @action changeName = (name: string) => {
    this.Name = name;
  };
  @action changeMail = (mail: string) => {
    this.Mail = mail;
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
