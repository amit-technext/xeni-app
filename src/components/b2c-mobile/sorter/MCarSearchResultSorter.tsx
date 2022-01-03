import React, { FC, useState } from 'react'
import MobileContainer from 'container/b2c-mobile/MobileContainer'
import SortingInputData from 'components/b2c-mobile/ui/SortingInputType'
import carShortingData from '../../../data/b2c-mobile/carShortingData'

interface MCarSearchResultSorterProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	sortType: string
	// callbackSort: (data: string) => void
}

const MCarSearchResultSorter: FC<MCarSearchResultSorterProps> =
	function MCarSearchResultSorter(props) {
		const { sortType } = props
		const [, setData] = useState('')

		return (
			<MobileContainer>
				{sortType === 'Sort' &&
					carShortingData.carCapacity.map((item, index) => (
						<div key={index.toString()}>
							{/* {console.log(item.list, 'test')} */}
							<p className='mb-1 fw-semi-bold'>{item.title}</p>
							<SortingInputData data={item.list} name={item.title} setData={setData} />
						</div>
					))}
				{sortType === 'Capacity' &&
					carShortingData.carCapacity.map((item, index) => (
						<div key={index.toString()}>
							{/* {console.log(item.list, 'test')} */}
							<p className='mb-1 fw-semi-bold'>{item.title}</p>
							<SortingInputData data={item.list} name={item.title} setData={setData} />
						</div>
					))}
				{sortType === 'Policies' && (
					<SortingInputData
						data={carShortingData.carPolicies}
						setData={setData}
						name={sortType}
					/>
				)}
				{sortType === 'Car type' && (
					<SortingInputData
						data={carShortingData.carType}
						setData={setData}
						name={sortType}
					/>
				)}
				{sortType === 'Rental agency' && (
					<SortingInputData
						data={carShortingData.carRentalAgency}
						setData={setData}
						name={sortType}
					/>
				)}
				{sortType === 'Total price' && (
					<SortingInputData
						data={carShortingData.carPrice}
						setData={setData}
						name={sortType}
					/>
				)}
				{sortType === 'Car Features' && (
					<SortingInputData
						data={carShortingData.carFeatures}
						setData={setData}
						name={sortType}
					/>
				)}

				{/* <div className='d-flex justify-content-center mt-2'>
					<Button onClick={(): void => callbackSort(data)}>Done</Button>
				</div> */}
			</MobileContainer>
		)
		// return <div>{sortType === 'best' ? <div>I am best</div> : 'something'}</div>;
	}

export default MCarSearchResultSorter
