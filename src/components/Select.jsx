import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FormHelperText, InputAdornment, ListSubheader, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from '@mui/material/CircularProgress';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  autoFocus: false ,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 550,
    },
  },
};

export default function MultipleSelect (props) {
 function getStyles(value, option, theme) {
   return {
     fontWeight:
       option?.indexOf(value) === -1
         ? theme.typography.fontWeightRegular
         : theme.typography.fontWeightMedium,
   };
 }
 const theme = useTheme();

  return (
    <div  {...{className: props?.className}}>
      <FormControl  className='min-w-full block' style={{ width: '100%'}} error={props?.error}>
        <InputLabel id="demo-multiple-chip-label">{props?.title}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id={props?.name}
          name={props?.name}
          multiple
          value={props?.value}
          
          className='bg-white min-w-full'
          readOnly={props?.readOnly}
          disabled={props?.disabled}
          onChange={props?.handleChange}
          onFocus={props?.handleFocus}
          onBlur={props?.onBlur}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, width: '100%' }}>
              {selected?.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props?.handleSearch && <ListSubheader>
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
                endAdornment: props?.searchLoading && (
                  <React.Fragment>
                    <CircularProgress color="inherit" size={20} /> 
                    {/* {params.InputProps.endAdornment} */}
                  </React.Fragment>
                ),
              }}
              onChange={props?.handleSearch}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>}

          {props?.loading ? 
          <p
              style={{fontWeight: theme.typography.fontWeightRegular, padding: '0 1em', width: '100%'}}
            >
              Loading...
            </p> : props?.options?.map((option) => (
            <MenuItem
            className='w-full'
              key={option}
              value={option}
              style={getStyles(option, props?.value, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText className='text-[red]'>{props?.helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}