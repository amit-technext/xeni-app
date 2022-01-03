import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import data, {
	changeSubsriptionPlan
} from '../../data/agent-command-center/agent-command-centerData'
import ProfileSettings from '../../components/agent-command-center-desktop/profile-setting/ProfileSettings'
import IconButton from '../../components/common/utils/IconButton'
import MarkUpSetting from '../../components/agent-command-center-desktop/dashboard/MarkUpSetting'

const SettingPage: FC = function SettingPage() {
	const markUp = data[5]
	const [settingType, setSettingType] = useState('profile')
	return (
		<div>
			{/* {settingType} */}
			<div className='d-flex cursor-default'>
				<div
					role='button'
					tabIndex={0}
					onClick={(): void => setSettingType('profile')}
					onKeyPress={(): void => setSettingType('profile')}
					className={classNames('mx-3 my-2', {
						'text-primary border border-x-0 border-top-0 border-bottom-2 border-primary':
							settingType === 'profile'
					})}
				>
					Profile Settings
				</div>
				<div
					role='button'
					tabIndex={0}
					onClick={(): void => setSettingType('markup')}
					onKeyPress={(): void => setSettingType('markup')}
					className={classNames('mx-3 my-2', {
						'text-primary border border-x-0 border-top-0 border-bottom-2 border-primary':
							settingType === 'markup'
					})}
				>
					Markup Settings
				</div>
			</div>

			{settingType === 'profile' && (
				<ProfileSettings changeSubsriptionPlan={changeSubsriptionPlan} />
			)}
			{settingType === 'markup' && (
				<div className='mt-4 mx-3 ps-3'>
					<div className='d-flex justify-content-between me-3'>
						<p className='text-800 fw-bold'>Default markup settings</p>
						<IconButton
							className='me-2 mb-1'
							size='sm'
							transform='shrink-3'
							onClick={(): void => {}}
							icon={faSave}
						>
							Save
						</IconButton>
					</div>
					<MarkUpSetting markUp={markUp} />
				</div>
			)}
		</div>
	)
}

export default SettingPage
