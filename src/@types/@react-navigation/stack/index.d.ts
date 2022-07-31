declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    Signin: NavigationStackProp<string>;
    MyCars: NavigationStackProp<string>;
    CarDetails: NavigationStackProp<string>;
    Scheduling: NavigationStackProp<string>;
    InitialData: NavigationStackProp<string>;
    CreatePassword: NavigationStackProp<string>;
    SuccessFeedback: NavigationStackProp<string>;
    SchedulingDetails: NavigationStackProp<string>;
  }
}
