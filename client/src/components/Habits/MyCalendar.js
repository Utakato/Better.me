import moment from "moment"
import { useState, useEffect } from "react"
import buildCalendar from "./buildCalendar"
import CalendarDay from "./CalendarDay"

const MyCalendar = ({selectedHabit}) => {
	const [calendar, setCalendar] = useState([])
	const [value, setValue] = useState(moment())
	
	useEffect(() => {
		setCalendar(buildCalendar(value))
	}, [value])

		
	return (
		<div className="mycalendar">
			{calendar.map(week => {
				return (
				<div>
					{week.map(day => 
					<CalendarDay day={ day } selectedHabit={selectedHabit} />
						)}
						{/* {console.log(day.format("DD/MM"))} format pentru done_days */}
				</div>
			)}
				
				)}
		</div>
	)
}

export default MyCalendar
