import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import {
	Autocomplete,
	Button,
	CircularProgress,
	Container,
	TextField,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { Box } from '@mui/system';

const Stocks = [
	{ name: 'APPLE INC', value: 'AAPL - APPLE INC', symbol: 'APPL' },
	{ name: 'ALPHABET CORP', value: 'GOOG - ALPHABET CORP', symbol: 'GOOG' },
	{
		name: 'TESLA MOTORS INC',
		value: 'TSLA - TESLA MOTORS INC',
		symbol: 'TSLA',
	},
];

const getSearchResultsAsync = async (value) => {
    console.log('AJAX: ' + value);
	return await (() =>
		Stocks.filter(
			(stock) => stock.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
		))(value);
};


const CustomTextField = withStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderRadius: `40px`,
			},
		},
	},
})(TextField);

const HomeSearch = () => {
    const [options, setOptions] = useState([]);
    const [inputValue, setInputValue] = useState(""); 
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const getResultsDelayed = useCallback(
        _.debounce((text, callback) => {
          setOptions([]);
          getSearchResultsAsync(text).then(callback);
        }, 500),
        []
      );    



      useEffect(() => {
        if (inputValue.length<2) return;
        setLoading(true);
        getResultsDelayed(inputValue, (filteredOptions) => {
          setOptions(filteredOptions);
          setLoading(false);
        });
      }, [inputValue, getResultsDelayed]);

	return (
		<Container
			sx={{
				margin: '0px auto',
				width: '100%',
				maxWidth: '700px',
				marginTop: '30px',
			}}
		>
			<Autocomplete
				id="asynchronous-demo"
				sx={{ margin: '0px auto', display: 'block', maxWidth: '500px' }}
				//open={open}
                onOpen={() => {
					setOpen(true);
				}}
				onClose={() => {
					setOpen(false);
				}}
				open={inputValue.length > 1 && options.length>0}
				isOptionEqualToValue={(option, value) => option.value === value.value}
				inputValue={inputValue}
				onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
				getOptionLabel={(option) => option.value}
				renderOption={(props, option) => (
					<Box {...props}>
						<b>{option.symbol}</b>: {option.name}
					</Box>
				)}
                onChange={ (e, obj) => { console.log(obj); setOpen(false); } }
				options={options}
				//loading={loading}
				renderInput={(params) => (
					<CustomTextField
						sx={{ margin: '0px auto', display: 'block', maxWidth: '500px' }}
						{...params}
						label="Search Stocks"
						placeholder="Example: TLSA"
						variant="outlined"
						fullWidth
                        InputProps={{
							...params.InputProps,
							endAdornment: (
								<React.Fragment>
									{loading ? (
										<CircularProgress color="inherit" size={20} />
									) : null}
									{params.InputProps.endAdornment}
								</React.Fragment>
							),
						}}
					/>
				)}
			/>

			<Container sx={{ width: '330px', marginTop: '20px' }}>
				<Button variant="contained">Search</Button>
				<Button variant="outlined" sx={{ float: 'right' }}>
					I'm Feeling Lucky
				</Button>
			</Container>
		</Container>
	);
};

export default HomeSearch;
