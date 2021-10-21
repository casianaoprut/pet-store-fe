import {Status} from "./status";

export interface SaleForm {
  id?: string;
  petId: string;
  firstname: string;
  lastname: string;
  adoptionDescription: string;
  address: string;
  userUid: string;
  status: Status
  userReview: boolean;
}
