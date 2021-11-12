import React from 'react'
import s from './Sidebar.module.css'

export default function Sidebar(){
	return(
			<nav className='sidebar'>
		        <div>
		            <a>Profile</a>
		        </div>
		        <div>
		            <a>Messages</a>
		        </div><div>
		            <a>News</a>
		        </div>
		        <div>
		            <a>Music</a>
		        </div>
		        <div>
		            <a>Settings</a>
		        </div>
		    </nav>
	)
}