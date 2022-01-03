export type SeatClassType = {
	id?: string | number
	travelClassName: string
	price: string
	numberOfBag: string
	numberOfChecked: string
	selectStatus: string
	statusIcon: string
	data: ClassDataType[]
}
export type ClassDataType = {
	icon: string
	info: string
	price: string
}
