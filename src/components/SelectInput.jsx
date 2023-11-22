import React from 'react';
import { CircularProgress, FormControl, InputAdornment, InputLabel, ListSubheader, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const SelectInput = ({name, label, value, handleChange, handleBlur, handleFocus, error, options, helperText, bg = 'white', required, ...other}) => {
  const { className, handleSearch, searchLoading, loading,  ...others} = other
 return (
  <FormControl hiddenLabel required className="w-full text-left" {...{ error, className }}>
								<InputLabel id={name}>{label}</InputLabel>
        <Select
        className='text-left'
          labelId={name}
          id={name}
          value={value}
										name={name}
          label={name}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={handleFocus}
                    // required={required}
          sx={{background: bg}}
          // {...{...others}}
        >
          {/* {handleSearch && <Input   aria-label='Search' placeholder='Search' sx={{px: '1em', width: '100%'}} />} */}

          {handleSearch && <ListSubheader>
            <TextField
              size="small"
              // Autofocus on textfield
              autoFocus
              placeholder="Type to search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchLoading && (
                  <React.Fragment>
                    <CircularProgress color="inherit" size={20} /> 
                    {/* {params.InputProps.endAdornment} */}
                  </React.Fragment>
                ),
              }}
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>}

          {
            
          }

{loading ? 
          <p
              style={{fontWeight: 500, padding: '0 1em', width: '100%'}}
            >
              Loading...
            </p> : options.map((data, key) => {
              if(data instanceof Object) return <MenuItem {...{value: data, key}}> {data.value} </MenuItem> 
              else return <MenuItem {...{value: data, key}}> {data} </MenuItem>
            })
          }
        </Select>
        {error && <Typography className="bg-white pt-1 text-[0.75rem] px-[14px] leading-[1.66] font-normal" color='error'>{helperText || ""}</Typography>}
					</FormControl>
 );
}

export default SelectInput;
