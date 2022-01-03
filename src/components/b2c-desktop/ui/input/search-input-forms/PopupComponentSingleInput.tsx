import React, { FC, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import { Times, Location,Flight } from '../../../../../assets/icons'
import Flex from '../../../../common/utils/Flex'
import { FlightSearchDataType } from '../../../../../type/formData'

interface PopupComponentSingleInputProps {
	suggestedData: FlightSearchDataType[]
	setSelected: React.Dispatch<React.SetStateAction<FlightSearchDataType>>
	HandleIcon: React.FunctionComponent<any>
	setPopup: React.Dispatch<React.SetStateAction<boolean>>
	placeHolder: string
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>
	setToggleClass: React.Dispatch<React.SetStateAction<string>>
}

const PopupComponentSingleInput: FC<PopupComponentSingleInputProps> =
	function PopupComponentSingleInput({
		suggestedData,
		setSelected,
		HandleIcon,
		setPopup,
		placeHolder,
		setIsActive,
		setToggleClass
	}) {
		const [searchItem, setSearchItem] = useState('')
		const [searchResults, setSearchResults] = useState<FlightSearchDataType[]>([
			{ place: '', countryShortCode: '', country: '', location: '' }
		])

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			setSearchItem(e.target.value)
		}

		useEffect(() => setSearchResults(suggestedData), [searchItem])

		return (
			<div className='rounded overflow-hidden'>
				<div className='d-flex justify-content-between p-3 bg-100'>
					<div className='d-flex w-100 align-items-center'>
						<div className='text-1100'>
							<HandleIcon height='1.25rem' width='1.25rem' className='text-600' />
						</div>
						<Form.Control
							type='text'
							value={searchItem}
							onChange={handleChange}
							placeholder={placeHolder}
							className='border-0 me-2 ms-3'
							style={{ height: '34px' }}
						/>
					</div>
					<div>
						<button
							type='button'
							tabIndex={0}
							onKeyDown={(): void => {
								setToggleClass('closed')
								setPopup(false)
							}}
							onClick={(): void => {
								setToggleClass('closed')
								setPopup(false)
							}}
							className='border rounded bg-100 text-600 h-100 text-black hover-bg-200 shadow-sm d-flex align-items-center justify-content-center'
							style={{ height: '34px', width: '34px' }}
						>
							<Times height='1.25rem' width='1.25rem' />
						</button>
					</div>
				</div>
				<div className='overflow-auto scrollbar' style={{ maxHeight: '384px' }}>
					{searchResults?.map(item => (
						<div
							role='button'
							tabIndex={0}
							onKeyDown={(): void => {
								setToggleClass('closed')
								setPopup(false)
							}}
							key={nanoid()}
							onClick={(): void => {
								setSelected(item)
								setToggleClass('closed')
								setPopup(false)
								setIsActive(true)
							}}
							style={{ paddingRight: '.8rem' }}
							className='d-flex justify-content-between cursor-pointer ps-3 py-2 hover-bg-200'
						>
							<Flex alignItems='center' className='gap-3'>
								<div className='d-flex align-self-start mt-1'>
									<HandleIcon height='1.4rem' width='1.4rem' className='text-600' />
								</div>
								<div>
									<p className='m-0 text-900 fw-medium fs-14px'>{item.place}</p>
									<p className='m-0 text-700 fw-normal fs-12px'>
										{item.location},{item.country}
									</p>
								</div>
							</Flex>
							{item.countryShortCode ? (
								<div style={{ width: '36px' }} className='text-end'>
									<p className='m-0 fw-medium fs-14px'>{item.countryShortCode}</p>
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		)
	}

export default PopupComponentSingleInput
