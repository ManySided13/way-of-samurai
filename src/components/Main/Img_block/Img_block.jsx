import React from 'react'
import s from './Img_block.module.css'

export default function Img_block(props){
	return(
		<article className={s.grid}>
			<div className={s.block}>
				<p><h1>{props.text}</h1></p>
				<img className={s.img1} src={props.src} alt="img" /> 
			</div>
		</article>
	)
}