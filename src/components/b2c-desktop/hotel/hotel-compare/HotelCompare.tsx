import { toast } from 'react-toastify'
import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { IHotelSearchProps } from 'interface/IHotelProps'
import ModalWrap from '../../modal/ModalWrap'
import HotelCompareModal from './HotelCompareModal'
import HotelSelectedForCompare from './HotelSelectedForCompare'

interface HotelSelectedForCompareProps {
	selectedHotels: IHotelSearchProps[]
	dayCount: number
	removeHotel: (id: string) => void
}

const HotelCompare: FC<HotelSelectedForCompareProps> = function HotelCompare(
	props
) {
	const { selectedHotels, dayCount, removeHotel } = props
	const [show, setShow] = useState(false)

	const handleShow = (): void => {
		if (selectedHotels?.length < 2) {
			toast.error('Please select at least  2 hotels !')
		} else {
			setShow(true)
		}
	}

	return (
		<>
			{selectedHotels?.length > 0 ? (
				<div className='position-fixed w-100 bottom-0 start-0 end-0 cHotelCompare'>
					<div className='d-flex w-100 justify-content-center'>
						{selectedHotels?.map(hotel => (
							<HotelSelectedForCompare
								key={hotel?.id}
								hotel={hotel}
								dayCount={dayCount}
								removeHotel={(id: string): void => removeHotel(id)}
							/>
						))}
						<div className='d-flex flex-column justify-content-between align-items-start'>
							<p className='fs-0 fw-semi-bold mt-2 mb-0' style={{ color: '#fff' }}>
								Max Compare: {selectedHotels?.length} of 3
							</p>
							<Button
								onClick={handleShow}
								disabled={selectedHotels.length === 1}
								bsPrefix='btn text-white bg-primary fw-bold fs-1 py-3 px-6'
							>
								Compare
							</Button>
						</div>
					</div>
				</div>
			) : null}

			<ModalWrap
				show={show}
				setShow={setShow}
				dialogClassName='modal-xl'
				bodyClassName='p-0 pb-4'
				modalTitle=''
				showFooter={false}
			>
				<HotelCompareModal selectedHotels={selectedHotels} dayCount={dayCount} />
			</ModalWrap>
		</>
	)
}

export default HotelCompare
