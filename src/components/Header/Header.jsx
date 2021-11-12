import React from 'react'
import s from './Header.module.css'
import Header_link from './Header_link/Header_link'
import Logo from './Logo/Logo'

export default function Header(){
	return(
		<header className="header">
			<div className="conteiner">
				<div className={s.inner}>
					<div className={s.section}>
						<Logo />
					</div>
					<div className={s.section}>
						<Header_link />
					</div>
				</div>
				
			</div>
		</header>
	)
}