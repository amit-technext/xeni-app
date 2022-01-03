import { ReactNode } from "react";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";

export interface CustomCheckBoxProps {
	type: FormCheckType
	id: string
	label: string | ReactNode
	name: string
	disable: boolean | string
	change: (a: any, b?:any) => void
	check: boolean
}