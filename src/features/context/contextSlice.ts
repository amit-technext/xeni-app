import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import IContextState from '../../interface/IContextState'
import { setItemToStore } from '../../helpers/utils'
import { NavItem, RadioItem } from '../../type/menuType'

const initialState: IContextState = {
	isFluid: false,
	isRTL: false,
	isDark: false,
	hotelMapView: false,
	navbarPosition: 'combo',
	showBurgerMenu: false, // controls showing vertical nav on mobile
	showSettingPanel: false,
	currency: '$',
	isNavbarVerticalCollapsed: false, // toggle vertical navbar collapse
	navbarStyle: 'transparent',
	primaryColor: '#2c7be5',
	isB2C: false,
	appName: 'default',
	showSearchPanel: false,
	showLeftMenuMobile: false,
	url: '',
	fontFamily: [
		"'Open Sans', sans-serif",
		"'Poppins', sans-serif",
		"'Roboto', sans-serif",
		"'Comic Neue', cursive"
	],
	userFontFamily: "'Roboto', sans-serif",
	tripType: 'One Way',
	searchTrip: 'One Way',
	navItems: [
		{
			id: 1,
			title: 'Air Travel',
			icon: 'flight',
			href: '/flight',
			active: true
		},
		{
			id: 2,
			title: 'Hotels',
			icon: 'hotel',
			href: '/hotels',
			active: true
		},
		{
			id: 3,
			title: 'Cars',
			icon: 'car',
			href: '/cars',
			active: true
		},
		{
			id: 4,
			title: 'Activities',
			icon: 'activities',
			href: '/activities',
			active: true
		},
		{
			id: 5,
			title: 'Group Travels',
			icon: 'group',
			href: '/group-travels',
			active: true
		},
		{
			id: 6,
			title: 'Sea Travels',
			icon: 'sea',
			href: '/sea-travels',
			active: true
		}
	],
	aircraftType: [
		{
			id: '1',
			active: true,
			label: 'Commercial',
			value: 'commercial'
		},
		{
			id: '2',
			active: true,
			label: 'Private Charter',
			value: 'private_charter'
		},
		{
			id: '3',
			active: true,
			label: 'Helicopters',
			value: 'helicopters'
		}
	],
	hotelTypes: [
		{
			id: '1',
			active: true,
			label: 'Hotel',
			value: 'hotel'
		},
		{
			id: '2',
			active: true,
			label: 'Villas & Homes',
			value: 'villas & home'
		},
		{
			id: '3',
			active: true,
			label: 'Compounds',
			value: 'compounds'
		}
	]
}
export const contextSlice = createSlice({
	name: 'context',
	initialState,
	reducers: {
		setUserFontFamily: (state, action: PayloadAction<string>) => {
			state.userFontFamily = action.payload
			setItemToStore('userFontFamily', action.payload)
		},
		setAppName: (state, action: PayloadAction<string>) => {
			state.appName = action.payload
			setItemToStore('appName', action.payload)
		},
		setPrimaryColor: (state, action: PayloadAction<string>) => {
			state.primaryColor = action.payload
			setItemToStore('primaryColor', action.payload)
		},
		setIsRTL: (state, action: PayloadAction<boolean>) => {
			state.isRTL = action.payload
			setItemToStore('isRTL', action.payload)
		},
		setIsDark: (state, action: PayloadAction<boolean>) => {
			state.isDark = action.payload
			setItemToStore('isDark', action.payload)
		},
		setShowSettingPanel: (state, action: PayloadAction<boolean>) => {
			state.showSettingPanel = action.payload
			setItemToStore('showSettingsPanel', action.payload)
		},
		setShowSearchPanel: (state, action: PayloadAction<boolean>) => {
			state.showSearchPanel = action.payload
			setItemToStore('showSettingsPanel', action.payload)
		},
		setNavItems: (state, action: PayloadAction<NavItem[]>) => {
			state.navItems = action.payload
		},
		setAircraftType: (state, action: PayloadAction<RadioItem[]>) => {
			state.aircraftType = action.payload
		},
		setHotelType: (state, action: PayloadAction<RadioItem[]>) => {
			state.hotelTypes = action.payload
		},
		setTripType: (state, action: PayloadAction<string>) => {
			state.tripType = action.payload
		},
		setSearchTripType: (state, action: PayloadAction<string>) => {
			state.tripType = action.payload
		},
		setHotelMapView: (state, action: PayloadAction<boolean>) => {
			state.hotelMapView = action.payload
			setItemToStore('hotelMapView', action.payload)
		}
	}
})

export const {
	setUserFontFamily,
	setPrimaryColor,
	setAppName,
	setIsRTL,
	setIsDark,
	setShowSettingPanel,
	setNavItems,
	setAircraftType,
	setHotelType,
	setHotelMapView,
	setShowSearchPanel,
	setTripType,
	setSearchTripType
} = contextSlice.actions
export const selectContext = (state: RootState): IContextState => state.context
export default contextSlice.reducer
