import { FormControlLabel } from "@mui/material"
import { Checkbox } from "@mui/material"

const DayCheckbox = ({value}) => {
	const label = value[0]
	return (
		<FormControlLabel
			sx={{margin:0}}
			id={value}
			value={value}
			control={<Checkbox size="small"/>}
			label={label}
			labelPlacement="top"
		/>
	)
}

export default DayCheckbox
