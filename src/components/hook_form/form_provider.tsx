import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------
interface FormProviderProps {
	children: React.ReactNode;
	methods: object;
	onSubmit: () => {};
}

const FormProvider = ({ children, onSubmit, methods }: FormProviderProps) => {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	);
};

export default FormProvider;
