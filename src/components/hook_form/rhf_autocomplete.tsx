import { Controller, useFormContext } from "react-hook-form";

import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

import { countries } from "@/assets/data";

import Iconify from "@/components/iconify";


// ----------------------------------------------------------------------

export const getCountry = (inputValue : string) => {
	const option = countries.filter((country) => country.label === inputValue)[0];

	return {
		...option,
	};
}


// ----------------------------------------------------------------------
interface RHFAutocompleteProps {
	name: string;
	type: string;
	label: string;
	helperText?: React.ReactNode;
	placeholder?: string;
	[key: string]: any;
}

const RHFAutocomplete = ({
	name,
	label,
	type,
	helperText,
	placeholder,
	...other
} : RHFAutocompleteProps) => {
	const { control, setValue } = useFormContext();

	const { multiple } = other;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => {
				if (type === "country") {
					return (
						<Autocomplete
							{...field}
							id={`autocomplete-${name}`}
							autoHighlight={!multiple}
							disableCloseOnSelect={multiple}
							onChange={(event, newValue) =>
								setValue(name, newValue, { shouldValidate: true })
							}
							renderOption={(props, option) => {
								const country = getCountry(option);

								if (!country.label) {
									return null;
								}

								return (
									<li {...props} key={country.label}>
										<Iconify
											key={country.label}
											icon={`circle-flags:${country.code?.toLowerCase()}`}
											sx={{ mr: 1 }}
										/>
										{country.label} ({country.code}) +{country.phone}
									</li>
								);
							}}
							renderInput={(params) => {
								const country = getCountry(params.inputProps.value);

								const baseField = {
									...params,
									label,
									placeholder,
									error: !!error,
									helperText: error ? error?.message : helperText,
									inputProps: {
										...params.inputProps,
										autoComplete: "new-password",
									},
								};

								if (multiple) {
									return <TextField {...baseField} />;
								}

								return (
									<TextField
										{...baseField}
										InputProps={{
											...params.InputProps,
											startAdornment: (
												<InputAdornment
													position="start"
													sx={{
														...(!country.code && {
															display: "none",
														}),
													}}
												>
													<Iconify
														icon={`circle-flags:${country.code?.toLowerCase()}`}
														sx={{ mr: -0.5, ml: 0.5 }}
													/>
												</InputAdornment>
											),
										}}
									/>
								);
							}}
							renderTags={(selected, getTagProps) =>
								selected.map((option, index) => {
									const country = getCountry(option);

									return (
										<Chip
											{...getTagProps({ index })}
											key={country.label}
											label={country.label}
											icon={
												<Iconify
													icon={`circle-flags:${country.code?.toLowerCase()}`}
												/>
											}
											size="small"
											variant="soft"
										/>
									);
								})
							}
							{...other}
						/>
					);
				}

				return (
					<Autocomplete
						{...field}
						id={`autocomplete-${name}`}
						onChange={(event, newValue) =>
							setValue(name, newValue, { shouldValidate: true })
						}
						renderInput={(params) => (
							<TextField
								{...params}
								label={label}
								placeholder={placeholder}
								error={!!error}
								helperText={error ? error?.message : helperText}
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password",
								}}
							/>
						)}
						{...other}
					/>
				);
			}}
		/>
	);
}

export default RHFAutocomplete