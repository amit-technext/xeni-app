import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import Background from './Background'

interface SectionProps extends HTMLAttributes<HTMLOrSVGElement> {
	fluid?: boolean
	bg?: string
	image?: string
	overlay?: boolean | string
	position?:
		| string
		| {
				x: string
				y: string
		  }
	video?: Array<string>
	bgClassName?: string
	className?: string
	children: React.ReactNode
}

const Section: FC<SectionProps> = function Section({
	fluid,
	bg,
	// image,
	overlay,
	position,
	video,
	bgClassName,
	className,
	children
}: SectionProps) {
	const bgProps = { overlay, position, video, className }
	bgClassName && (bgProps.className = bgClassName)

	return (
		<section className={classNames({ [`bg-${bg}`]: bg }, className)}>
			{/* {image && <Background {...bgProps} />} */}
			<Container fluid={fluid}>{children}</Container>
		</section>
	)
}

Section.defaultProps = {
	fluid: false,
	bg: '',
	// image: '',
	overlay: '',
	position: '',
	video: [''],
	bgClassName: '',
	className: ''
}

export default Section
