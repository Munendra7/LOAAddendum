import { WebPartContext } from "@microsoft/sp-webpart-base";
import { AddendumFields } from "./AddendumFields";

export interface IAddendumProps {
  description: string;
  context: WebPartContext
}

export interface IAddendumStates {
  addendumFields: AddendumFields;
}
