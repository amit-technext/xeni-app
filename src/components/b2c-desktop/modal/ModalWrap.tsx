import React, { Dispatch, FC, HTMLAttributes, SetStateAction } from 'react'
import { Modal, Button } from 'react-bootstrap'
import FalconCloseButton from '../../common/utils/FalconCloseButton'

interface ModalWrapProps extends HTMLAttributes<HTMLOrSVGElement> {
	show: boolean
	setShow: Dispatch<SetStateAction<any>>
	dialogClassName: string
	bodyClassName: string
	children: React.ReactNode
	modalTitle: string
	showFooter: boolean
}

const ModalWrap: FC<ModalWrapProps> = function ModalWrap(props) {
	const {
		show,
		setShow,
		dialogClassName,
		bodyClassName,
		children,
		modalTitle,
		showFooter
	} = props

	const handleClose = (): void => setShow(false)

	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop='static'
			keyboard={false}
			dialogClassName={dialogClassName || ''}
		>
			<Modal.Header className={modalTitle ? '' : 'border-0'}>
				{modalTitle ? <Modal.Title>{modalTitle}</Modal.Title> : null}
				<FalconCloseButton
					onClick={handleClose}
					size={undefined}
					noOutline
					variant={undefined}
					className={undefined}
				/>
			</Modal.Header>
			<Modal.Body className={bodyClassName || ''}>{children}</Modal.Body>
			{showFooter ? (
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary'>Understood</Button>
				</Modal.Footer>
			) : null}
		</Modal>
	)
}

export default ModalWrap
