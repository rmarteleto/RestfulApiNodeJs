export interface Event {
  type: string;
  email?: string; // an event may or may not be associated with an user
  created?: any; // can take any date format
}
