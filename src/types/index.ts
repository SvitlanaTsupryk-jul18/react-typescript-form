export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// export interface FormErrors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   phone?: string;
//   subject?: string;
//   message?: string;
// }

//Record creates an object type where each key from T maps to a string.
// Utility Partial makes all properties optional
export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

