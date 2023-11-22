import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";


const OtpInput = ({ disabled, onSubmit, length = 4 }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({
		token: new Array(length).fill(""),
	});

	const handleInput = ({ code, key, target }, i) => {
		if (code !== "Backspace") {
			if (isNaN(key)) {
				target.classList.add("border-danger");
			} else {
				if (!state.ready) {
					setState({
						...state,
						token: [...state.token.map((val, idx) => (idx === i ? key : val))],
					});
					target?.nextElementSibling?.focus();
					target.classList.remove("border-danger");
				}
			}
		} else {
			setState({
				ready: false,
				token: [...state.token.map((val, idx) => (idx === i ? "" : val))],
			});
			target?.previousElementSibling?.focus();
		}
	};

	useEffect(() => {
		if (state.token.filter(Boolean).length === length) {
			setIsLoading(true);
		}else if (isLoading) setIsLoading(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.token]);

 const handlePaste = ({target: {value}}) => {
		if(value && value.length === length && !isNaN(value)) {
			setState({ token: value.split("") });
		}
	}

	return (
		<>
			<div className="">
				<div className="" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', alignContent: 'space-around', flexDirection: 'column', width: '80%', marginRight: 'auto', marginLeft: 'auto', marginTop: '2em'}}>
				<div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
					{state.token.map((token, i) => {
						return (
							<input
								className=""
								type="text"
								value={token}
								key={i}
								onChange={handlePaste}
        style={{width: '70px', height: '60px', border: '1px solid #111', borderRadius: '5px', textAlign: 'center'}}
								placeholder="_"
								onFocus={(e) => e.target.select()}
								onKeyUp={(e) => handleInput(e, i)}
							/>
						);
					})}
				</div>
     <LoadingButton
          fullWidth
						sx={{".MuiLoadingButton-loadingIndicatorCenter": { color: 'var(--c-bg-color) !important'}
					, borderRadius: '10px', bgcolor: isLoading && 'var(--c-primary-0) !important', mt: '2em', '&:hover': {bgcolor: 'var(--c-primary-1) !important',}}}
          size="large"
          type="submit"
          disabled={!isLoading}
          loading={disabled}
          variant="contained"
										onClick={_=> onSubmit(Number(state.token.join('')))}
        >
          <span>Verify</span>
        </LoadingButton>
				</div>
			</div>
		</>
	);
};

export default OtpInput;