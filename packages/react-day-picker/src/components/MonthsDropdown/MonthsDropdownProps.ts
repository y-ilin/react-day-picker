import { MonthChangeEventHandler } from 'types';

/** The props for the [[MonthsDropdown]] component. */
export interface MonthsDropdownProps {
  /** The month where the dropdown is displayed. */
  displayMonth: Date;
  /** Event handler when the dropdown changes */
  onChange: MonthChangeEventHandler;
}
