import React from "react";
import { observable, action, makeAutoObservable } from "mobx";

class AppearanceStore {
  @observable darkModeBool: boolean = false;
  @observable darkModeText: string = "";
  @observable platform: string = "";

  @action setDarkMode(value: boolean) {
    this.darkModeBool = value;
    if (value) {
      this.darkModeText = "dark";
    } else {
      this.darkModeText = "white";
    }
  }
  @action setPlatform(value1: string) {
    this.platform = value1;
  }
  constructor() {
    makeAutoObservable(this);
  }
}

export const appearanceStore = new AppearanceStore();
