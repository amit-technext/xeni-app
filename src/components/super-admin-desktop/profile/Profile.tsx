import React, { FC, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Flex from '../../common/utils/Flex'
import IconButton from '../../common/utils/IconButton'
import PersonalInfo from './PersonaInfo'

interface ProfileProps {
	callBackSave: () => void
}

const Profile: FC<ProfileProps> = function Profile(props) {
	const { callBackSave } = props
	const [data] = useState(0)
	const saveData = (item: any): void => {
		console.log(item)
	}

	return (
		<div>
			<Flex justifyContent='end'>
				<IconButton
					className='me-2 mb-1'
					size='sm'
					icon={['fab', 'joystick']}
					transform='shrink-3'
					onClick={(): void => {
						saveData(data)
						callBackSave()
					}}
				>
					Save
				</IconButton>
			</Flex>
			<Tabs
				defaultActiveKey='Personal Details'
				id='uncontrolled-tab-example'
				transition={false}
			>
				<Tab
					eventKey='Security'
					title='Security'
					className='border-bottom border-x p-3'
				>
					<p>
						Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt
						tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
						williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
						dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson
						ex squid. Aliquip placeat salvia cillum iphone.
					</p>
				</Tab>
				<Tab
					eventKey='Personal Details'
					title='Personal Details'
					className='border-bottom border-x p-3'
				>
					<PersonalInfo />
				</Tab>
				<Tab
					eventKey='Payment Information'
					title='Payment Information'
					className='border-bottom border-x p-3'
				>
					<p>
						Accuse me thus: that I have scanted all, Wherein I should your great
						deserts repay, Forgot upon your dearest love to call, Whereto all bonds do
						tie me day by day; That I have frequent been with unknown minds, And given
						to time your own dear-purchas'd right;
					</p>
				</Tab>
				<Tab
					eventKey='Identification'
					title='Identification'
					className='border-bottom border-x p-3'
				>
					<p>
						Accuse me thus: that I have scanted all, Wherein I should your great
						deserts repay, Forgot upon your dearest love to call, Whereto all bonds do
						tie me day by day; That I have frequent been with unknown minds, And given
						to time your own dear-purchas'd right;
					</p>
				</Tab>
			</Tabs>
		</div>
	)
}

export default Profile
