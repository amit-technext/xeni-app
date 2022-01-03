export default interface ISettings {
	isFluid: boolean
	isRTL: boolean
	isDark: boolean
	hotelMapView: boolean
	navbarPosition: string
	showBurgerMenu: boolean // controls showing vertical nav on mobile
	currency: string
	isNavbarVerticalCollapsed: boolean // toggle vertical navbar collapse
	navbarStyle: string
	primaryColor: string
	isB2C: boolean
	appName: string
	showSearchPanel: boolean
	showLeftMenuMobile: boolean
	url: string
	fontFamily: string[]
	userFontFamily: string
	tripType: string
	searchTrip: string
	navItems: object[]
	aircraftType: object[]
	hotelTypes: object[]
}
