import type { ChangeEvent } from "react";

export interface RadioData {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  check: string;
}
