import React, { FC, ReactNode } from 'react'
import { Button, CloseButton, Modal } from 'react-bootstrap'

interface ModalCustomProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	show: boolean
	setShow: (status: boolean) => void
	dialogClassName?: string
	bodyClassName?: string
	children: ReactNode
	modalTitle?: ReactNode
	modalCloseStyle?: string
	showFooter?: boolean
	fullscreen: any
}

const ModalCustom: FC<ModalCustomProps> = function ModalCustom(props) {
	const {
		show,
		setShow,
		dialogClassName,
		bodyClassName,
		children,
		modalTitle,
		modalCloseStyle,
		fullscreen,
		showFooter
	} = props

	return (
		<Modal
			show={show}
			fullscreen={fullscreen}
			onHide={(): void => setShow(false)}
			dialogClassName={dialogClassName || ''}
		>
			<Modal.Header>
				{modalTitle ? <Modal.Title>{modalTitle || null}</Modal.Title> : null}
				<CloseButton
					className={`${
						modalCloseStyle || ''
					} btn btn-circle btn-sm transition-base p-0`}
					onClick={(): void => setShow(false)}
				/>
			</Modal.Header>
			<Modal.Body className={bodyClassName || ''}>{children}</Modal.Body>
			{showFooter ? (
				<Modal.Footer>
					<Button variant='secondary'>Close</Button>
					<Button variant='primary'>Save changes</Button>
				</Modal.Footer>
			) : null}
		</Modal>
	)
}

ModalCustom.defaultProps = {
	showFooter: false,
	dialogClassName: undefined,
	bodyClassName: undefined,
	modalTitle: undefined,
	modalCloseStyle: undefined
}

export default ModalCustom
