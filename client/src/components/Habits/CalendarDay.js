import moment from "moment"
import { useDispatch } from "react-redux";
import * as actions from "../../actions/habitAction"
import { useEffect } from "react";

const CalendarDay = ({day, selectedHabit}) => {
	const dispatch = useDispatch()
	const {calendar, frequency} = selectedHabit

	function beforeMonth( day) {
		const today = moment();
		const startMonth = today.clone().startOf("month")
		return day.isBefore(startMonth)
	}
	
	function afterMonth(day) {
		const today = moment();
		const endMonth = today.clone().endOf("month")
		return day.isAfter(endMonth)
	}

	function isToday(day) {
		const today = moment()
		return day.isSame(today, 'day')
	}

	const status = (day) => {
		const date = day.format("DD/MM/YYYY")
		if (calendar.done.includes(date)) return "done"
		if (calendar.offDay.includes(date)) return "offDay"
		if (calendar.skipDay.includes(date)) return "skipDay"
		if (calendar.missDay.includes(date)) return "missDay"
		return ""
	} 
	
	const betterStyles = (day) => {
		return `${dayStyles(day)} ${status(day)}` 
	}

	const dayStyles = day => {
		if (beforeMonth(day)) return "beforeMonth"
		if (afterMonth(day)) return "beforeMonth"
		if (isToday(day)) return "today"
		return ""
	}


	const createPayloadAndUpdate = (day, statusType) => {
		const payload = {
			id: selectedHabit._id,
			status: statusType,
			date: day.format("DD/MM/YYYY")
		}
		dispatch(actions.updateHabit(payload))
		console.log("dispatch got called", payload)
	}

	const handleOffDay = () => {
		if (!frequency.includes(day.format("dddd"))) {
			// push day.format("DD/MM/YYYY") to calendar.offDay
			createPayloadAndUpdate(day, "offDay")
		}
	}
	

	const handleClick = () => {
		const today = moment()
		if (day.format("DD/MM/YY") === today.format("DD/MM/YY")) {
			if (frequency.includes(day.format("dddd"))) {
				// push day.format("DD/MM/YYYY") to calendar.done
				createPayloadAndUpdate(day, "done")
			} else {
				alert("You were not supposed to do this today.")
			}
		}
			
		
	}

	// This will be harder to implement
	const handleSkipDay = () => {
		if (frequency.includes(day.format("dddd"))) {
			// push day.format("DD/MM/YYYY") to calendar.skipDay
			createPayloadAndUpdate("skipDay")
		}
	}

	const handleMissDay = () => {     
		const yesterday = moment().subtract(1, 'days')
		if (frequency.includes(yesterday.format("dddd"))) {
			console.log("this shoudld get called")
			if (!calendar.done.includes(yesterday.format("DD/MM/YYYY")) || !calendar.skipDay.includes(yesterday.format("DD/MM/YYYY"))){
				// push yesterday.format("DD/MM/YYYY") to calendar.missDay
				createPayloadAndUpdate(yesterday, "missDay")
			}
			
		}
	}

	useEffect(() => {
		handleMissDay()
		handleOffDay()
	},)
	// console.log(day.format("dddd"))
	return (
		<div className="calendarday" onClick={handleClick} >
			<div className={betterStyles(day)} >
				{day.format("D")}
			</div>
		</div>
	)
}

export default CalendarDay
