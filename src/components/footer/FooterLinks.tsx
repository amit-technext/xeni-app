import React, { FC, HTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'

type FooterItemType = { id: string; title: string; link: string }

interface FooterLinksProps extends HTMLAttributes<HTMLOrSVGElement> {
	titleOfCategory: string
	items: Array<FooterItemType>
}

const FooterLinks: FC<FooterLinksProps> = function FooterLinks(props) {
	const { titleOfCategory, items } = props

	const location = useLocation()
	const pathName = location?.pathname?.split('/')
	const currentPathName = pathName?.[pathName.length - 1]

	return (
		<>
			<h6 className='fw-bold pb-2'>{titleOfCategory}</h6>
			{items?.map(item => (
				<p key={item.id}>
					<Link
						className={
							currentPathName.toLowerCase() === item.title.toLowerCase()
								? 'text-primary text-decoration-underline fw-medium'
								: 'text-800'
						}
						to={item.link}
					>
						{item.title}
					</Link>
				</p>
			))}
		</>
	)
}

export default FooterLinks
