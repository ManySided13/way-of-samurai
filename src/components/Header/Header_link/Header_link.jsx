import React from 'react'
import s from './Header_link.module.css'

export default function Header_link() {
	return(
		<ul className={s.ul}>
			<li><a href="#" className={s.link}>Menu</a></li>
			<li><a href="#" className={s.link}>News</a></li>
			<li><a href="#" className={s.link}>Delivery</a></li>
			<li><a href="#" className={s.link}>Contacts</a></li>
		</ul>
	)
}