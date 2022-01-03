import { NavItem, RadioItem } from '../type/menuType';

interface IContextState {
  isFluid: boolean;
  isRTL: boolean;
  isDark: boolean;
  hotelMapView: boolean;
  navbarPosition: string;
  showBurgerMenu: boolean; // controls showing vertical nav on mobile
  showSettingPanel: boolean;
  currency: string;
  isNavbarVerticalCollapsed: boolean; // toggle vertical navbar collapse
  navbarStyle: string;
  primaryColor: string;
  isB2C: boolean;
  appName: string;
  showSearchPanel: boolean;
  showLeftMenuMobile: boolean;
  url: string;
  fontFamily: string[];
  userFontFamily: string;
  tripType: string;
  searchTrip: string;
  navItems: NavItem[];
  aircraftType: RadioItem[];
  hotelTypes: RadioItem[];
}
export default IContextState;
