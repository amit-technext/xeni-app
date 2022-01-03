import classNames from 'classnames'
import { CloseButton, Form, Modal } from 'react-bootstrap'
import React, {
	Dispatch,
	FC,
	HTMLAttributes,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import Flex from '../../common/utils/Flex'
import { FlightSearchDataType } from '../../../type/formData'

interface MInputSearchFromProps extends HTMLAttributes<HTMLOrSVGElement> {
	destinationType: string
	selectedCountry: FlightSearchDataType
	setSelectedCountry: Dispatch<SetStateAction<FlightSearchDataType>>
	searchData: FlightSearchDataType[]
	Icon: any
}

const MInputSearchFrom: FC<MInputSearchFromProps> = function MInputSearchFrom({
	destinationType,
	selectedCountry = {},
	setSelectedCountry,
	searchData,
	Icon
}) {
	const [isActive, setIsActive] = useState(false)
	const [fullscreen, setFullscreen] = useState<
		true | 'md-down' | 'sm-down' | 'lg-down' | 'xl-down' | 'xxl-down' | undefined
	>(undefined)
	const [show, setShow] = useState(false)
	const [searchResults, setSearchResults] = useState<FlightSearchDataType[]>([])
	const [searchItem, setSearchItem] = useState('')

	const handleShow = (
		breakPoint:
			| true
			| 'md-down'
			| 'sm-down'
			| 'lg-down'
			| 'xl-down'
			| 'xxl-down'
			| undefined
	): void => {
		setFullscreen(breakPoint)
		setShow(true)
	}
	const handleChange = (e: {
		target: { value: React.SetStateAction<string> }
	}): void => {
		setSearchItem(e.target.value)
	}

	useEffect(() => {
		const results = searchData.filter(
			data =>
				data.country.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.place.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.location.toLowerCase().includes(searchItem.toLowerCase()) ||
				data.countryShortCode.toLowerCase().includes(searchItem.toLowerCase())
		)
		setSearchResults(results)
	}, [searchItem])
	return (
		<>
			<div
				role='button'
				tabIndex={0}
				onKeyDown={(): void => handleShow('md-down')}
				onClick={(): void => handleShow('md-down')}
				className={classNames(
					'bg-100 border d-flex align-items-center rounded position-relative cursor-pointer destination-input',
					{
						'border-primary': isActive,
						'border-300': !isActive
					}
				)}
				style={{ height: 48 }}
			>
				<span className='align-self-center ms-2 ps-1'>
					<Icon />
				</span>
				{selectedCountry.country !== '' ? (
					<p className='p-1 fw-regular fs--1 text-nowrap text-dark ms-1 my-2'>
						{selectedCountry.countryShortCode !== ''
							? `${selectedCountry.country}(${selectedCountry.countryShortCode})`
							: selectedCountry.place}
					</p>
				) : (
					<p className='p-1 fs--1 fw-regular text-nowrap text-dark ms-1 my-2'>
						{destinationType}
					</p>
				)}
			</div>
			<Modal
				show={show}
				fullscreen={fullscreen}
				onHide={(): void => setShow(false)}
			>
				<Modal.Header>
					<Modal.Title>
						<span className='text-dark fw-semi-bold fs--1'>
							{/* {destinationType} */}
							<Form.Control
								id='search'
								type='text'
								value={searchItem}
								onChange={handleChange}
								placeholder={destinationType}
								className='border-0'
								autoFocus
								ref={(inputElement: any): void => {
									if (inputElement) {
										inputElement.focus()
									}
								}}
							/>
						</span>
					</Modal.Title>
					<CloseButton
						className='btn btn-circle btn-sm transition-base p-0'
						onClick={(): void => {
							setShow(false)
						}}
					/>
				</Modal.Header>
				<Modal.Body>
					<div className='overflow-auto scrollbar' style={{ maxHeight: '450px' }}>
						{searchResults.map(item => (
							<div
								role='button'
								onKeyDown={(): void => {
									setSelectedCountry(item)
									setIsActive(true)
									setShow(false)
								}}
								tabIndex={0}
								key={item.place}
								onClick={(): void => {
									setSelectedCountry(item)
									setIsActive(true)
									setShow(false)
								}}
							>
								<Flex
									justifyContent='between'
									alignItems='center'
									className='hover-bg-200 rounded-3 cursor-pointer searchItem py-1 my-1 px-2'
								>
									<Flex alignItems='center'>
										{/* <FontAwesomeIcon icon={faMapMarkerAlt} size={'lg'} /> */}
										<Icon width='1.2rem' height='1.2rem' />
										<Flex direction='column' className='ms-3'>
											<p className='mb-0 text-dark'>{item.place}</p>
											<p className='mb-0 text-700 fs--1'>
												{item.location.length > 30
													? `${item.location.slice(0, 25)}...`
													: item.location}
												,{item.country}
											</p>
										</Flex>
									</Flex>
									<p className='fs--1 text-900'>{item.countryShortCode}</p>
								</Flex>
								<hr className='my-0' />
							</div>
						))}
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default MInputSearchFrom
