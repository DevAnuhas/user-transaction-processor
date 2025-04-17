import z from "zod";

const processUserSchema = z.object({
	user: z.object({
		name: z.string().min(1),
		dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
			message: "Invalid date format",
		}),
	}),
	transactions: z.array(
		z.object({
			id: z.number().min(1),
			amount: z.number().min(1),
		})
	),
});

export { processUserSchema };
