import React from "react";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
 Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordInput({
	label,
	name,
	error,
	helperText,
 value,
	...other
}) {
	const [showPassword, setShowPassword] = React.useState(false);
 const [style, setStyle] = React.useState('transparent');
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl hiddenLabel className="w-full mt-8" required>
			<InputLabel style={{background: style, color: error ? '#d32f2f' : ''}}  htmlFor="confirmPassword">
				{label}
			</InputLabel>
			<OutlinedInput
   className="bg-white"
				{ ...other }
    onFocus={ _=> setStyle(_=> (value ? 'linear-gradient(to bottom, var(--c-bg-color), white)' : 'transparent')) }
				id={name}
    value={value}
				error={error}
				name={name}
				type={showPassword ? "text" : "password"}
    required={other.required}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end">
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
   {error && <Typography className="bg-white pt-1 text-[0.75rem] px-[14px] leading-[1.66] font-normal" color='error'>{helperText}</Typography>}
		</FormControl>
	);
}
