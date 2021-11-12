import React from 'react'
import s from './Post.module.css'

export default function Post(props){
	return(
		<div className={s.post}>
			<p>{props.text}</p>
		</div>
	)
}